import React, { useState } from "react";
import { categories, products } from "../data/data";
import Card from "./Card";

const AllProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <section className="w-full min-h-screen px-4 md:px-6 lg:px-10 py-6">
      <div className="flex flex-col md:flex-row gap-6">

        {/* LEFT PANEL (STICKY) */}
        <div className="w-full md:w-[30%] bg-white p-6 rounded-xl shadow md:sticky md:top-6 md:h-fit">
          <h2 className="text-2xl font-[Dinosaur] mb-4">All Products</h2>

          <ul className="flex flex-wrap gap-3 md:block md:space-y-3">
            {categories.map((cat) => (
              <li
                key={cat}
                className={`cursor-pointer px-4 py-2 rounded-lg font-[Dinosaur] font-normal text-sm md:text-base transition
                  ${
                    selectedCategory === cat
                      ? "bg-black text-white"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT PANEL (SCROLLS) */}
        <div className="w-full md:w-[70%] max-h-[90vh] overflow-y-auto pr-2 no-scrollbar">
          <h2 className="text-xl font-[Dinosaur] mb-4">
            Showing: {selectedCategory}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                className="bg-white rounded-2xl shadow hover:scale-[1.02] hover:bg-amber-300 transition ease-in-out group"
              >
                {/* IMAGE */}
                <div className="relative w-full h-72 overflow-hidden rounded-t-2xl">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                  />

                  <img
                    src={product.h_image || product.image}
                    alt={product.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                </div>

                {/* TEXT */}
                <div className="px-4 py-3 font-[Dinosaur]">
                  <h3 className="text-lg">{product.title}</h3>
                  <p className="text-gray-400 uppercase text-sm">
                    {product.desc}
                  </p>
                </div>
              </Card>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default AllProducts;
