import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Textation from "../components/Textation";

const OurTreats = () => {
  return (
    <section className="w-full min-h-screen overflow-x-hidden bg-[#FFEBC3]">
      {/* Navbar */}
      <div className="px-4 md:px-8 lg:px-16 py-4">
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="px-4 md:px-8 lg:px-16 py-6">
        <div className="flex flex-col lg:flex-row gap-8 border border-gray-200 rounded-4xl shadow-md bg-white p-6 md:p-8">

          {/* Left Text */}
          <div className="flex-1 flex flex-col gap-6">
            <h3 className="font-[Dinosaur] text-[#FFEBC3] text-xl sm:text-2xl">
              BETTER WHEN IT’S BONKERS
              <p className="font-['FatFrank'] text-3xl sm:text-4xl lg:text-5xl leading-tight text-[#FFEBC3]">
              WHIFFY GOOD SNACKY SNACKS
              </p>
            </h3>
            
            <p className="font-['RooneySansRegular'] text-sm sm:text-base lg:text-lg text-gray-900 leading-relaxed">
              Pets make life better. And they are absolutely BONKERS. Wag-first,
              zoomie-powered, snack-obsessed little weirdos - and we love them
              for it. We make snacks that celebrate the weird and wonderful joy
              of pets. Whiffy-good, tail-wagging, purr-powered treats made to
              drive your pet absolutely BONKERS (in the best way)! Carefully
              crafted, delightfully unhinged, and loved by pets and their people
              everywhere 🤪
            </p>
          </div>

          {/* Right Video */}
          <div className="flex-1 flex items-center justify-center">
            <video
              className="w-full max-w-sm sm:max-w-md lg:max-w-full rounded-3xl object-cover aspect-4/3"
              src="/videos/allProductsVideo.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>
      </div>

      {/* Textation Banner */}
      <Textation className="font-['Dinosaur'] bg-[#FFD715] shadow-lg py-3 whitespace-nowrap">
        <span className="mx-8"> YUMMO</span>
        <span className="mx-8"> MULTI-AWARD WINNING</span>
        <span className="mx-8"> OVER 15000 FIVE STAR REVIEWS</span>
        <span className="mx-8"> NO ARTIFICIAL NASTIES</span>
        <span className="mx-8"> FORMULATED BY ANIMALS NUTRITIONISTS</span>
        <span className="mx-8"> VIRAL TIK-TOK TREAT</span>

        {/* duplicate for smooth scroll */}
        <span className="mx-8"> YUMMO</span>
        <span className="mx-8"> MULTI-AWARD WINNING</span>
        <span className="mx-8"> OVER 15000 FIVE STAR REVIEWS</span>
        <span className="mx-8"> NO ARTIFICIAL NASTIES</span>
        <span className="mx-8"> FORMULATED BY ANIMALS NUTRITIONISTS</span>
        <span className="mx-8"> VIRAL TIK-TOK TREAT</span>
      </Textation>

      {/* Footer */}
      <Footer />
    </section>
  );
};

export default OurTreats;
