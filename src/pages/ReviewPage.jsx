import React, { useState } from "react";
import { products } from "../data/data";  
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PexelsVideo from "../components/PexelsVideo";
import Textation from "../components/Textation";
import { assets } from "../assets/assets";

const ReviewPage = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [review, setReview] = useState("");

  const toggleProduct = (product) => {
    const alreadySelected = selectedProducts.find((p) => p.id === product.id);

    if (alreadySelected) {
      setSelectedProducts(selectedProducts.filter((p) => p.id !== product.id));
    } else {
      setSelectedProducts([...selectedProducts, product]);
    }
  };

  const handleSubmit = () => {
    if (selectedProducts.length === 0) {
      alert("Please select at least one product!");
      return;
    }
    if (!review.trim()) {
      alert("Please write a review!");
      return;
    }

    console.log({ selectedProducts, review });

    alert("Review Submitted Successfully!");
    setSelectedProducts([]);
    setReview("");
  };

  return (
    <section className="w-full overflow-x-hidden">
      {/* Navbar */}
      <div className="bg-[#FFEBC3] px-4 sm:px-6 md:px-10 lg:px-16 py-4">
        <Navbar />
      </div>

      {/* Review Box Area */}
      <div className="min-h-screen bg-[#FFEBC3] flex justify-center py-8 px-3 sm:px-6">
        <div className="bg-white shadow-2xl rounded-2xl p-4 sm:p-6 md:p-12 w-full max-w-6xl">
          <h1 className="text-2xl sm:text-3xl font-['Dinosaur'] text-center mb-6">
            Customer Review
          </h1>

          {/* TextArea */}
          <textarea
            className="w-full border rounded-xl p-3 sm:p-4 text-base sm:text-lg outline-none focus:text-2xl"
            rows={4}
            placeholder="Write your review here..."
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />

          <h2 className="text-lg sm:text-xl font-['FatFrank'] mt-6 mb-3">
            Select Products (Multiple Allowed)
          </h2>

          {/* Product Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 p-2 overflow-y-auto max-h-95 sm:max-h-105 md:max-h-120 no-scrollbar">
            {products.map((p) => {
              const isSelected = selectedProducts.some((item) => item.id === p.id);

              return (
                <div
                  key={p.id}
                  onClick={() => toggleProduct(p)}
                  className={`cursor-pointer border rounded-2xl p-3 sm:p-4 flex flex-col items-center shadow-md transition 
                  hover:scale-105 hover:shadow-xl ${
                    isSelected
                      ? "border-green-600 bg-green-100"
                      : "border-gray-300"
                  }`}
                >
                  <img
                    src={p.image}
                    alt={p.desc}
                    className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
                  />
                  <p className="mt-3 font-bold text-center text-xs sm:text-sm">
                    {p.title}
                  </p>
                  <p className="text-gray-600 text-[10px] sm:text-sm text-center">
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="mt-12 py-4 w-full bg-black text-white rounded-xl text-lg font-['Dinosaur'] hover:bg-black active:scale-95 transition"
          >
            Send Review
          </button>
        </div>
      </div>

      {/* Textation */}
      <Textation className="font-['Dinosaur'] bg-[#FFD715] shadow-lg py-3 whitespace-nowrap text-sm sm:text-base md:text-lg">
        <span className="mx-8">YUMMO</span>
        <span className="mx-8">MULTI-AWARD WINNING</span>
        <span className="mx-8">OVER 15000 FIVE STAR REVIEWS</span>
        <span className="mx-8">NO ARTIFICIAL NASTIES</span>
        <span className="mx-8">FORMULATED BY ANIMAL NUTRITIONISTS</span>
        <span className="mx-8">VIRAL TIK-TOK TREAT</span>
    {/* Duplicates */}
        <span className="mx-8">YUMMO</span>
        <span className="mx-8">MULTI-AWARD WINNING</span>
        <span className="mx-8">OVER 15000 FIVE STAR REVIEWS</span>
        <span className="mx-8">NO ARTIFICIAL NASTIES</span>
        <span className="mx-8">FORMULATED BY ANIMAL NUTRITIONISTS</span>
        <span className="mx-8">VIRAL TIK-TOK TREAT</span>
      </Textation>

      {/* Pexels Video */}
      <div>
        <PexelsVideo />
      </div>

      {/* Logos Slider */}
      <div className="mt-10 overflow-hidden">
        <Textation className="bg-white rounded-2xl shadow-xl flex items-center gap-6 sm:gap-10 md:gap-14 p-4 w-max whitespace-nowrap animate-[ticker-ltr_12s_linear_infinite]">
          {[
            assets.amazon_img, assets.chewy_img, assets.cvs_img,
            assets.meijer_img, assets.petco_img, assets.petsmart_img,
            assets.target_img, assets.walgreens_img, assets.walmart_img,
          ].map((img, i) => (
            <img key={i} src={img} className="h-6 sm:h-8 md:h-10 lg:h-12 object-contain" />
          ))}
        {/* Duplicates */}
          {[
            assets.amazon_img, assets.chewy_img, assets.cvs_img,
            assets.meijer_img, assets.petco_img, assets.petsmart_img,
            assets.target_img, assets.walgreens_img, assets.walmart_img,
          ].map((img, i) => (
            <img key={i} src={img} className="h-6 sm:h-8 md:h-10 lg:h-12 object-contain" />
          ))}
        </Textation>
      </div>

      {/* Footer */}
      <Footer />
    </section>
  );
};

export default ReviewPage;
