import React from "react";
import {
  highQuality,
  warranty,
  freeShipping,
  dedicatedSupport,
} from "../assets/Icons/Icons";

const Features = () => {
  return (
    <section className="shadow-md">
      <div className="py-10 container grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="flex items-center gap-2">
          <div>
            <img src={highQuality} alt="h-q" className="w-8 h-8" />
          </div>
          <div className="flex flex-col justify-start gap-1">
            <p className="text-lightGray font-medium text-sm text-left">
              High Quality
            </p>
            <p className="text-black text-xs font-light text-left">
              Crafted from pure materials
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div>
            <img src={warranty} alt="h-q" className="w-8 h-8" />
          </div>
          <div className="flex flex-col justify-start gap-1">
            <p className="text-lightGray font-medium text-sm text-left">
              Warranty Protection
            </p>
            <p className="text-black text-xs font-light text-left">
              Over 2 years
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div>
            <img src={freeShipping} alt="h-q" className="w-8 h-8" />
          </div>
          <div className="flex flex-col justify-start gap-1">
            <p className="text-lightGray font-medium text-sm text-left">
              Free Shipping
            </p>
            <p className="text-black text-xs font-light text-left">
              Order Over 150 $
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div>
            <img src={dedicatedSupport} alt="h-q" className="w-8 h-8" />
          </div>
          <div className="flex flex-col justify-start gap-1">
            <p className="text-lightGray font-medium text-sm text-left">
              24/7 Support
            </p>
            <p className="text-black text-xs font-light text-left">
              Dedicated Support
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
