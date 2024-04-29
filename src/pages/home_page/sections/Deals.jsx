import React from "react";
import { Button } from "../../../components/components";
import CountDownTimer from "../utils/CountDownTimer";
import DealsGallery from "../utils/DealsGallery";

const Deals = () => {
  return (
    <section className="relative mx-auto max-w-[1536px] pt-[5px] mt-[15px] pb-5 bg-deals-bg overflow-x-hidden">
      <div className="container flex flex-col lg:flex-row items-start py-20">
        <div className="flex flex-col items-start gap-5 lg:w-[40%] ">
          <h2 className="font-volkhov text-lightGray font-medium text-2xl lg:text-3xl">
            Deals Of The Month
          </h2>
          <p className="text-base text-whiteGray">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Perferendis perspiciatis eaque voluptatum, vero enim recusandae
            explicabo veritatis modi tempora illum cupiditate placeat voluptates
            atque molestiae vel, ipsa dignissimos eum harum.
          </p>
          <Button text={"Buy Now"} />
          <div className="flex flex-col items-start gap-1">
            <h3 className="text-lightGray text-lg">
              Hurry, Before It's Too Late!
            </h3>
            <CountDownTimer />
          </div>
        </div>
      </div>
      <DealsGallery />
    </section>
  );
};

export default Deals;
