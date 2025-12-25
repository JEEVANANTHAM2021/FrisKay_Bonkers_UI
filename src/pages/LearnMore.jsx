import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import img_1 from "../assets/images/learnMain_img.webp";
import img_2 from "../assets/images/learnPage_img.webp";
import img_3 from "../assets/images/learnPage_img2.webp";
import review_bg from '../assets/images/review-background.webp'
import Card from "../components/Card";
import Textation from "../components/Textation";
import { assets } from "../assets/assets";
import ViewProduct from "../components/ViewProduct";
import { Link } from "react-router-dom";

const prodInfos = [
  {
    q: "INGREDIENTS",
    type: "text",
    text:
      "Chicken, Beef, Glycerin, Tapioca Starch, Pea Protein, Caramel (color), Natural Smoke Flavor, Salt, Rosemary Extract, Vitamin E"
  },

  {
    q: "GUARANTEED ANALYSIS",
    type: "bullets",
    items: [
      "Crude Protein : 26% min",
      "Crude Fat : 6% min",
      "Crude Fiber : 3.5%",
      "Moisture : 18% max",
      "Ash : 5.5% max",
      "Calorie Content : 3130 kcal/kg, 32 kcal/treat"
    ]
  },

  {
    q: "FEEDING INSTRUCTIONS",
    type: "feeding",
    table: {
      col1: "Adult Dog Weight (kg)",
      col2: "Pieces / Day",
      rows: [
        { c1: "2 Kg", c2: "8" },
        { c1: "3 Kg", c2: "12" },
        { c1: "6 Kg", c2: "16" }
      ]
    },
    note1:
      "Daily feeding can vary according to pet's lifestyle, temperament and activity.",
    ticks: [
      "Ensure your pet has access to fresh water",
      "Store in a cool, dry place.",
      "Always provide regular veterinary care",
      "BONKERS dog treats are intended for intermittent or supplemental feeding only"
    ],
    note2: "Treats should only make up 10% of a dog's diet."
  }
];

const LearnMore = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="w-full">
      <div className="bg-[#FFEBC3] px-4 md:px-8 lg:px-16 py-4">
        <Navbar />
      </div>

{/* Main */}
      <div className="bg-[#FFEBC3] text-sm lg:text-lg font-['rooneySansRegular'] md:py-6 px-4 md:px-8 lg:px-16 py-4">

        {/* ==== GRID CONTAINER (EQUAL HEIGHT COLUMNS) ==== */}
        <div className="flex flex-col gap-8 lg:flex-row border border-gray-100 rounded-4xl shadow-md bg-white p-6 md:p-6 mx-auto">

          {/* LEFT SIDE */}
          <div className="flex-row gap-4">
            <div>
              <img className="w-full rounded-3xl object-cover" src={img_1} alt="" />
            </div>
            <div className="flex gap-3 md:gap-4 mt-3 md:mt-4 flex-col sm:flex-row">
                <img className="rounded-3xl w-full md:w-1/2 object-cover" src={img_2} alt="" />

                <img className="rounded-3xl w-full md:w-1/2 object-cover" src={img_3} alt="" />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full h-full flex flex-col gap-6 space-y-3 md:space-y-4">
            <div>
              <h3 className="font-[Dinosaur] text-[#FFEBC3] text-xl sm:text-2xl">
                BONKERS BBQ
              </h3>

              <p className="font-['FatFrank'] text-3xl sm:text-4xl lg:text-7xl leading-none text-[#FFEBC3]">
                BURGER <span className="flex-col sm:flex-row leading-none">PATTIES</span>
              </p>
            </div>

            <p className="text-gray-700 text-sm sm:text-base font-['rooneySansRegular'] text-justify leading-relaxed">
              Fire up the grill and let the BONKERS BBQ begin! Inspired by the same
              mouthwatering morsels you'd find sizzling on your own grill, these dog
              treats are packed full of real meaty flavor that'll have your dog doing
              backflips for more. Carefully formulated by animal nutritionists with
              real meat as the first ingredient and no artificial colors or flavors.
            </p>

            {/* PROD Infos */}
            <div className="mt-2 space-y-4">
              {prodInfos.map((item, i) => (
                <div key={i} className="border-b">

                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full flex justify-between items-center py-3 px-2 md:px-4 text-left"
                  >
                    <h3 className="font-['Dinosaur'] text-base sm:text-lg">
                      {item.q}
                    </h3>
                    <span className="text-2xl font-['rooneySansRegular']">
                      {openIndex === i ? "−" : "+"}
                    </span>
                  </button>

                  {openIndex === i && (
                    <div className="px-2 md:px-4 pb-4">

                      {item.type === "text" && (
                        <p className="leading-relaxed">{item.text}</p>
                      )}

                      {item.type === "bullets" && (
                        <ul className="list-disc pl-6 space-y-1">
                          {item.items.map((line, index) => (
                            <li key={index}>{line}</li>
                          ))}
                        </ul>
                      )}

                      {item.type === "feeding" && (
                        <>
                          <table className="w-full border overflow-hidden ">
                            <thead>
                              <tr>
                                <th className="p-2 text-left">{item.table.col1}</th>
                                <th className="p-2 text-left">{item.table.col2}</th>
                              </tr>
                            </thead>

                            <tbody>
                              {item.table.rows.map((row, index) => (
                                <tr key={index} className="border-t">
                                  <td className="p-2">{row.c1}</td>
                                  <td className="p-2">{row.c2}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>

                          <p className="mt-3 text-gray-400 font-['rooneySansRegular']">{item.note1}</p>

                          <ul className="mt-4 space-y-2">
                            {item.ticks.map((t, index) => (
                              <li key={index} className="flex items-start gap-2 font-['rooneySansRegular']">
                                <span className="text-black">✓</span>
                                <span>{t}</span>
                              </li>
                            ))}
                          </ul>

                          <p className="mt-4 font-bold text-lg font-['rooneySansRegular']">{item.note2}</p>
                        </>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-row gap-6 justify-around items-end md:gap-4 pt-2">
             <Link to={'/buy'} onClick={() => window.scrollTo(0,0)}><button className="px-2 py-1 md:px-4 md:py-3 bg-[#FFD715] rounded-md font-['Dinosaur']">
                      Where to Buy
                    </button>
              </Link>

             <Link to={'/review'} onClick={() => window.scrollTo(0,0)}><button className="px-2 py-1 md:px-4 md:py-3 bg-[#FFD715] rounded-md font-['Dinosaur']">
                Leave a Review
              </button></Link> 
            </div>
          </div>
        </div>
      </div>

{/* Text Running */}
      <Textation children className="font-['Dinosaur'] bg-[#FFD715] shadow-lg py-3 whitespace-nowrap">
        <span className="mx-8">YUMMO</span>
        <span className="mx-8">MULTI-AWARD WINNING</span>
        <span className="mx-8">OVER 15000 FIVE STAR REVIEWS</span>
        <span className="mx-8">NO ARTIFICIAL NASTIES</span>
        <span className="mx-8">FORMULATED BY ANIMALS NUTRITIONISTS</span>
        <span className="mx-8">VIRAL TIK-TOK TREAT</span>
        {/* Duplicates for loop */}
        <span className="mx-8">YUMMO</span>
        <span className="mx-8">MULTI-AWARD WINNING</span>
        <span className="mx-8">OVER 15000 FIVE STAR REVIEWS</span>
        <span className="mx-8">NO ARTIFICIAL NASTIES</span>
        <span className="mx-8">FORMULATED BY ANIMALS NUTRITIONISTS</span>
        <span className="mx-8">VIRAL TIK-TOK TREAT</span>
      </Textation>

{/* Banner */}
      <div className="m-4 rounded-3xl shadow-md flex flex-col justify-center items-center text-center
            min-h-20 sm:min-h-20 md:min-h-60 p-6 sm:p-10 md:p-14 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${review_bg})` }}>
        <h3 className="px-4 py-2 rounded-sm bg-[#FFD715] text-sm font-['Dinosaur'] rotate-4 translate-y-6">
          BBQ FAVE!
        </h3>

        <p className="uppercase font-['FatFrank'] text-2xl sm:text-3xl md:text-5xl text-white leading-tight mt-3 z-30">
          THEY ABSOLUTELY LOVE THESE TREATS!
        </p>

        <div className="flex gap-1 text-2xl sm:text-3xl mt-2">
          ⭐⭐⭐⭐⭐
        </div>
      </div>

{/* Store Logos */}
      <div className="mt-10 overflow-hidden">
        <Textation className="bg-white rounded-2xl shadow-xl flex items-center gap-8 md:gap-14 p-4 w-max whitespace-nowrap animate-[ticker-ltr_12s_linear_infinite]">
          {[
            assets.amazon_img, assets.chewy_img, assets.cvs_img,
            assets.meijer_img, assets.petco_img, assets.petsmart_img,
            assets.target_img, assets.walgreens_img, assets.walmart_img,
          ].map((img, i) => (
            <img key={i} src={img} className="h-8 sm:h-10 md:h-12 object-contain"/>
          ))}
      {/* Duplicates for loops */}
          {[
            assets.amazon_img, assets.chewy_img, assets.cvs_img,
            assets.meijer_img, assets.petco_img, assets.petsmart_img,
            assets.target_img, assets.walgreens_img, assets.walmart_img,
          ].map((img, i) => (
            <img key={i} src={img} className="h-8 sm:h-10 md:h-12 object-contain"/>
          ))}
        </Textation>
      </div>

{/* View Products */}
      <div className="mt-12">
        <ViewProduct />
      </div>

{/* Footer */}
      <Footer />
    </section>
  );
};

export default LearnMore;
