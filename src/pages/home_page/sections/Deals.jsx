import React from "react";
import { Button } from "../../../components/components";
import CountDownTimer from "../utils/CountDownTimer";

const Deals = () => {
  return (
    <section className="relative">
      <div className="container flex flex-col lg:flex-row items-start py-20">
        <div className="flex flex-col items-start gap-5 lg:w-[40%]">
          <h2 className="font-volkhov text-lightGray font-medium text-2xl  lg:text-3xl">
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
      <div className="lg:absolute top-0 lg:w-[55%] bottom-0 right-0 bg-black">
        hello
      </div>
    </section>
  );
};

export default Deals;
