import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import AvailableProducts from "./sections/AvailableProducts";
import Deals from "./sections/Deals";
const HomePage = () => {
  return (
    <section>
      <Navbar />
      <Hero />
      <AvailableProducts />
      <Deals />
    </section>
  );
};

export default HomePage;
