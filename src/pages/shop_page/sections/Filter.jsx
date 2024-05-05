import React from "react";
import Sidebar from "../utils/Sidebar";
import { arrowRight } from "../../../assets/Icons/Icons";

const Filter = () => {
  return (
    <section className="lg:flex lg:items-start relative">
      <div className="hidden lg:block lg:w-[25%]">
        <Sidebar />
      </div>
      <div className="block lg:hidden absolute text-black -top-12">
        <div className="p-2 bg-white border border-lightGray rounded-full">
          <img src={arrowRight} alt="arrow" className="w-4 h-4" />
        </div>
      </div>
      <div className="grid xxxs:grid-cols-1 xxs:grid-cols-2 md:grid-cols-3 gap-4 lg:w-[75%]">
        <div className="bg-black w-full h-[250px]"></div>
        <div className="bg-black w-full h-[250px]"></div>
        <div className="bg-black w-full h-[250px]"></div>
        <div className="bg-black w-full h-[250px]"></div>
        <div className="bg-black w-full h-[250px]"></div>
        <div className="bg-black w-full h-[250px]"></div>
        <div className="bg-black w-full h-[250px]"></div>
        <div className="bg-black w-full h-[250px]"></div>
        <div className="bg-black w-full h-[250px]"></div>
        <div className="bg-black w-full h-[250px]"></div>
      </div>
    </section>
  );
};

export default Filter;
