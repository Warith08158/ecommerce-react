import React from "react";
import {
  dealImage1,
  dealImage2,
  dealImage3,
} from "../../../assets/images/images";
import { arrowLeft, arrowRight } from "../../../assets/Icons/Icons";

const DealsGallery = () => {
  return (
    <>
      {/* for medium size devices */}
      <div className="hidden sm:block md:container lg:w-[50%] relative lg:absolute lg:top-0 lg:right-0 lg:mt-10 lg:flex lg:justify-end">
        <div className="sticky top-0 left-0 right-0 bottom-0 bg-transparent flex items-start gap-3">
          <img
            src={dealImage1}
            alt=""
            className="w-[320px] md:w-[400px] hidden sm:block object-cover max-h-[400px] shadow-md rounded-sm"
          />
          <div className="flex flex-col gap-6">
            <div className="flex items-stretch gap-3">
              <img
                src={dealImage2}
                alt=""
                className="w-[200px] md:w-[250px] hidden sm:block object-contain shadow-md rounded-sm"
              />
              <img
                src={dealImage3}
                alt=""
                className="w-[200px]  md:w-[250px] hidden sm:block object-contain shadow-md rounded-sm"
              />
            </div>
            <div className="flex flex-row items-center gap-3">
              <div className="bg-white rounded-full p-2 shadow-md">
                <img src={arrowLeft} alt="arrow-left" className="w-6 h-6" />
              </div>
              <div className="bg-white rounded-full p-2 shadow-md">
                <img src={arrowRight} alt="arrow-right" className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DealsGallery;
