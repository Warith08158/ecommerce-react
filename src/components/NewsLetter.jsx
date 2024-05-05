import React from "react";
import { Button } from "./components";

const NewsLetter = () => {
  return (
    <section className="pt-20 pb-10 container">
      <div className="xl:bg-newsLetter-bg bg-center bg-none bg-cover">
        <h1 className="text-left md:text-center xl:pt-[130px] font-volkhov text-lightGray font-medium text-2xl lg:text-3xl">
          Subscribe To Our Newsletter
        </h1>
        <div className="flex justify-center pt-4 xl:pt-4 xl:pb-[40px]">
          <p className="max-w-[600px] text-left md:text-center mx-auto text-base text-whiteGray">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            impedit consectetur velit at hic vitae eum non sed, ea rem earum
            aspernatur atque voluptates esse sit iure, consequatur id similique.
          </p>
        </div>
        <h1 className="text-left text-whiteGray text-sm md:text-center pt-4 xl:pt-[5px]">
          michael@ymail.com
        </h1>
        <div className="flex justify-start md:justify-center pt-6 xl:pt-[120px] xl:pb-[200px]">
          <Button text={"Subscribe Now"} />
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
