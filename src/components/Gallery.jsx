import React from "react";
import GalleryImages from "./GalleryImages";

const Gallery = () => {
  return (
    <section className="py-20">
      <div className="container">
        <h1 className="font-volkhov text-lightGray font-medium text-2xl lg:text-3xl text-left md:text-center">
          Follow Us on Instagram
        </h1>
        <div className="flex justify-center ">
          <p className="mt-4 text-left md:text-center max-w-[600px] mx-auto text-base text-whiteGray">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo sunt,
            officiis quos, modi sint facere tempora temporibus tenetur beatae
          </p>
        </div>
      </div>
      <GalleryImages />
    </section>
  );
};

export default Gallery;
