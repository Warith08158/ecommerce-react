import React from "react";
import {
  heroImage1,
  sale,
  heroImage2,
  heroImage3,
  heroImage4,
} from "../../../assets/images/images";
import { Button } from "../../../components/components";
import { cartIcon, arrowUp } from "../../../assets/Icons/Icons";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container mx-auto pb-5">
        <div className="lg:flex lg:flex-row lg:items-stretch lg:justify-between lg:gap-4">
          <div className="hidden lg:block lg:flex-1 bg-veryLightGray rounded-b-xl">
            <img src={heroImage3} alt="hero-image-3" />
          </div>
          <div className="lg:flex-1">
            <div className=" flex justify-center">
              <img
                src={heroImage1}
                alt="hero-image-1"
                className="object-cover h-48 w-full lg:rounded-b-xl lg:h-40"
              />
            </div>
            <div className=" flex flex-col items-center justify-center">
              <h1 className="text-5xl text-lightGray font-normal mt-5">
                ULTIMATE
              </h1>
              <img src={sale} alt="sale" className="object-contain h-28 w-80" />
              <h1 className="text-lightGray text-sm">NEW COLLECTION</h1>
              <button className="mt-5 mb-5">
                <Button text={"SHOP NOW"} />
              </button>
            </div>
            <div className=" flex items-center justify-center">
              <img
                src={heroImage2}
                alt="hero-image-2"
                className="object-cover h-48 w-full lg:rounded-xl lg:h-40"
              />
            </div>
          </div>
          <div className="rounded-b-xl hidden lg:flex-1 lg:flex lg:justify-center bg-veryLightGray">
            <img src={heroImage4} alt="hero-image-4" />
          </div>
        </div>
      </div>{" "}
    </section>
  );
};

export default Hero;
