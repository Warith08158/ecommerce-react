import React from "react";

import {
  galleryImage1,
  galleryImage2,
  galleryImage3,
  galleryImage4,
  galleryImage5,
  galleryImage6,
  galleryImage7,
} from "../assets/images/images";

const GalleryImages = () => {
  return (
    <div className="flex justify-center">
      <div className="mt-20 flex items-center overflow-x-hidden">
        <img
          src={galleryImage1}
          alt="galleryImage1"
          className="object-contain"
        />
        <img
          src={galleryImage2}
          alt="galleryImage2"
          className="object-contain"
        />
        <img
          src={galleryImage3}
          alt="galleryImage3"
          className="object-contain"
        />
        <img
          src={galleryImage4}
          alt="galleryImage4"
          className="object-contain"
        />
        <img
          src={galleryImage5}
          alt="galleryImage5"
          className="object-contain"
        />
        <img
          src={galleryImage6}
          alt="galleryImage6"
          className="object-contain"
        />
        <img
          src={galleryImage7}
          alt="galleryImage7"
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default GalleryImages;
