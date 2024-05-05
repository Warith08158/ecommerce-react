import React from "react";
import Filter from "./sections/Filter";

const ShopPage = () => {
  return (
    <section className="container">
      <h1 className="mt-8 mb-4 font-volkhov text-lightGray font-medium text-2xl lg:text-3xl text-left md:text-center">
        Fashion
      </h1>
      <h4 className="text-lightGray text-base text-left md:text-center mb-20">
        Home - Fashion
      </h4>
      <Filter />
    </section>
  );
};

export default ShopPage;
