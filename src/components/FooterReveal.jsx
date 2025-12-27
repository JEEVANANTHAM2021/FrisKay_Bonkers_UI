import React, { useEffect, useRef, useState } from "react";
import Footer from "../components/Footer";

const FooterReveal = () => {
  const footerRef = useRef(null);
  const triggerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = triggerRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  return (
    <>
      <div ref={triggerRef} className="h-[45vh]" />

      <div
        ref={footerRef}
        className={`fixed left-0 w-full bottom-0 transition-transform duration-700 ease-out ${
          visible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <Footer />
      </div>
    </>
  );
};

export default FooterReveal;
