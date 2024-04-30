import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import AvailableProducts from "./sections/AvailableProducts";
import NewArrivals from "./sections/NewArrivals";
import {
  Deals,
  Features,
  PinkyBinder,
  Gallery,
} from "../../components/components";
const HomePage = () => {
  return (
    <section>
      <Navbar />
      <Hero />
      <AvailableProducts />
      <Deals />
      <NewArrivals />
      <PinkyBinder />
      <Features />
      <Gallery />
    </section>
  );
};

export default HomePage;
