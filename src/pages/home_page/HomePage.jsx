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
  NewsLetter,
} from "../../components/components";
import Testimonials from "./sections/Testimonials";
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
      <Testimonials />
      <NewsLetter />
    </section>
  );
};

export default HomePage;
