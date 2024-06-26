import React from "react";
import {
  heroImage1,
  sale,
  heroImage2,
  heroImage3,
  heroImage4,
} from "../../../assets/images/images";
import { Button } from "../../../components/components";
import { cartIcon } from "../../../assets/Icons/Icons";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero relative">
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
                <Link to="/shopping/shop">
                  <Button text={"SHOP NOW"} />
                </Link>
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
      </div>
      {/* <div className="fixed right-0 left-0 bottom-16 container flex justify-end z-10">
        <div className="bg-black px-3 py-2 rounded-lg shadow-md">
          <img src={cartIcon} alt="cart-icon" />
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
