import React from "react";
import Sidebar from "../utils/Sidebar";
import { arrowRight } from "../../../assets/Icons/Icons";
import { products } from "../../../data/products";

const Filter = () => {
  return (
    <section className="md:flex">
      <div className="hidden md:block">
        <Sidebar />
      </div>
      <div className="container md:hidden mb-6 sticky top-12">
        <button className="bg-white rounded-full p-2 shadow">
          <img src={arrowRight} alt="previous" className=" w-6 h-6" />
        </button>
      </div>
      <div className="grid container grid-cols-1 xxs:grid-cols-2 items-baseline lg:grid-cols-3 gap-8 w-full">
        {products.map((product) => (
          <div
            key={product.name}
            className="flex justify-center bg-white rounded-md shadow-md"
          >
            <div className="p-4 max-h-44 max-w-44">
              <img
                src={`/${product.image}`}
                alt={product.name}
                className="object-contain w-full h-full"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Filter;
