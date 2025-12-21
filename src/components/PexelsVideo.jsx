import { useState, useEffect, useRef, useCallback } from "react";

const baseVideos = [
  "/videos/pageVideo1.mp4",
  "/videos/pageVideo2.mp4",
  "/videos/pageVideo3.mp4",
  "/videos/pageVideo4.mp4",
  "/videos/pageVideo5.mp4",
  "/videos/pageVideo6.mp4",

  //Duplicate Videos for loop
  "/videos/pageVideo5.mp4",
  "/videos/pageVideo6.mp4",
  "/videos/pageVideo4.mp4",
  "/videos/pageVideo1.mp4",
  "/videos/pageVideo2.mp4",
  "/videos/pageVideo3.mp4",

  //Duplicate Videos for loop
  "/videos/pageVideo5.mp4",
  "/videos/pageVideo6.mp4",
  "/videos/pageVideo4.mp4",
  "/videos/pageVideo1.mp4",
  "/videos/pageVideo2.mp4",
  "/videos/pageVideo3.mp4",
];

const MOBILE_VISIBLE = 3;
const DESKTOP_VISIBLE = 6;

const MOBILE_WIDTH = 160;  // w-40
const DESKTOP_WIDTH = 240; // w-60
const GAP = 24;

const PexelsVideo = () => {
  // Visible count
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") return DESKTOP_VISIBLE;
    return window.innerWidth < 640 ? MOBILE_VISIBLE : DESKTOP_VISIBLE;
  });

  // Width of each video
  const [itemWidth, setItemWidth] = useState(() => {
    if (typeof window === "undefined") return DESKTOP_WIDTH;
    return window.innerWidth < 640 ? MOBILE_WIDTH : DESKTOP_WIDTH;
  });

  const STEP = itemWidth + GAP;

  const [index, setIndex] = useState(visible);
  const trackRef = useRef(null);
  const intervalRef = useRef(null);

  // Responsive handler
  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 640;

      setVisible(isMobile ? MOBILE_VISIBLE : DESKTOP_VISIBLE);
      setItemWidth(isMobile ? MOBILE_WIDTH : DESKTOP_WIDTH);
      setIndex(isMobile ? MOBILE_VISIBLE : DESKTOP_VISIBLE);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Build looping array
  const loopVideos = [
    ...baseVideos.slice(-visible),
    ...baseVideos,
    ...baseVideos.slice(0, visible),
  ];

  // Next / Prev
  const nextSlide = useCallback(() => {
    setIndex(prev => prev + visible);
  }, [visible]);

  const prevSlide = useCallback(() => {
    setIndex(prev => prev - visible);
  }, [visible]);

  // Auto slide
  const startAuto = useCallback(() => {
    intervalRef.current = setInterval(nextSlide, 3000);
  }, [nextSlide]);

  const stopAuto = useCallback(() => {
    clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    startAuto();
    return () => stopAuto();
  }, [startAuto, stopAuto]);

  // Reset when hitting clones
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    track.style.transition = "transform .7s ease-in-out";

    const RIGHT_LIMIT = (loopVideos.length - visible) * STEP;

    // reached fake right end → reset to real
    if (index * STEP >= RIGHT_LIMIT) {
      setTimeout(() => {
        track.style.transition = "none";
        setIndex(visible);
      }, 700);
    }

    // reached fake left → reset to real end
    if (index <= 0) {
      setTimeout(() => {
        track.style.transition = "none";
        setIndex(loopVideos.length - visible * 2);
      }, 700);
    }
  }, [index, loopVideos.length, visible, STEP]);

  return (
    <div
      className="relative w-full mx-auto overflow-hidden py-6"
      onMouseEnter={stopAuto}
      onMouseLeave={startAuto}
    >
      {/* TRACK */}
      <div
        ref={trackRef}
        className="flex gap-6 transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${index * STEP}px)`,
        }}
      >
        {loopVideos.map((src, i) => (
          <video
            key={i}
            src={src}
            className="rounded-3xl object-cover w-40 sm:w-60 aspect-video"
            autoPlay
            loop
            muted
            playsInline
          />
        ))}
      </div>

      {/* LEFT */}
      <button
        onClick={() => {
          stopAuto();
          prevSlide();
          startAuto();
        }}
        className="absolute left-0 top-1/2 -translate-y-1/2
        w-8 h-14 sm:w-10 sm:h-16 bg-black/70 hover:bg-black/90
        text-white flex items-center justify-center
        rounded-r-full backdrop-blur-md z-30"
      >
        <svg width="28" height="28" viewBox="0 0 24 24">
          <path
            d="M14 6l-6 6 6 6"
            stroke="white"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* RIGHT */}
      <button
        onClick={() => {
          stopAuto();
          nextSlide();
          startAuto();
        }}
        className="absolute right-0 top-1/2 -translate-y-1/2
        w-8 h-14 sm:w-10 sm:h-16 bg-black/70 hover:bg-black/90
        text-white flex items-center justify-center
        rounded-l-full backdrop-blur-md z-30"
      >
        <svg width="28" height="28" viewBox="0 0 24 24">
          <path
            d="M10 6l6 6-6 6"
            stroke="white"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default PexelsVideo;
