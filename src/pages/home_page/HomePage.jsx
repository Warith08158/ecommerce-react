import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import AvailableProducts from "./sections/AvailableProducts";
import Deals from "./sections/Deals";
import NewArrivals from "./sections/NewArrivals";
const HomePage = () => {
  return (
    <section>
      <Navbar />
      <Hero />
      <AvailableProducts />
      <Deals />
      <NewArrivals />
    </section>
  );
};

export default HomePage;
