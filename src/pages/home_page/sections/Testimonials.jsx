import React from "react";
import TestimonialCard from "../utils/TestimonialCard";

const Testimonials = () => {
  return (
    <section className="py-20 bg-grayWhite">
      <div className="container">
        <h1 className="font-volkhov text-lightGray font-medium text-2xl lg:text-3xl text-left md:text-center">
          This Is What Our Custormers Say
        </h1>
        <div className="">
          <p className="mt-4 text-left md:text-center max-w-[600px] mx-auto text-base text-whiteGray">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo sunt,
          </p>
        </div>
      </div>
      <TestimonialCard />
    </section>
  );
};

export default Testimonials;
