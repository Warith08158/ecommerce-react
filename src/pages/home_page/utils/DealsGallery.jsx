import React from "react";
import {
  dealImage1,
  dealImage2,
  dealImage3,
} from "../../../assets/images/images";
import { arrowLeft, arrowRight } from "../../../assets/Icons/Icons";
import {
  next,
  previous,
} from "../../../features/dealsGallery/dealsGallerySlice";
import { useDispatch, useSelector } from "react-redux";

const images = [dealImage1, dealImage2, dealImage3];

const DealsGallery = () => {
  const dispatch = useDispatch();
  const { image } = useSelector((store) => store.gallery);
  return (
    <>
      {/* for medium and desktop size devices */}
      <div className="hidden sm:block md:container lg:w-[50%] relative lg:absolute lg:top-0 lg:right-0 lg:mt-10 lg:flex lg:justify-end">
        <div className="sticky top-0 left-0 right-0 bottom-0 bg-transparent flex items-start gap-3">
          <img
            src={images[image]}
            alt="deal-image1"
            className="w-[320px] md:w-[400px] hidden sm:block object-cover max-h-[400px] min-h-[360px] shadow-md rounded-sm"
          />
          <div className="flex flex-col gap-3">
            <div className="flex items-stretch gap-3">
              <img
                src={image === 2 ? images[0] : images[image + 1]}
                alt="deal-image2"
                className="w-[200px] md:w-[250px] hidden sm:block object-cover shadow-md rounded-sm max-h-[350px] min-h-[300px]"
              />
              <img
                src={
                  image === 2 || image === 1
                    ? images[image - 1]
                    : images[image + 2]
                }
                alt=""
                className="w-[200px]  md:w-[250px] hidden sm:block object-cover shadow-md rounded-sm max-h-[350px] min-h-[300px]"
              />
            </div>
            <div className="flex flex-row items-center gap-3">
              <button
                onClick={() => dispatch(previous())}
                className="bg-white rounded-full p-2 shadow-md"
              >
                <img src={arrowLeft} alt="arrow-left" className="w-6 h-6" />
              </button>
              <button
                onClick={() => dispatch(next())}
                className="bg-white rounded-full p-2 shadow-md"
              >
                <img src={arrowRight} alt="arrow-right" className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* for smaller devices */}
      <div className="sm:hidden flex flex-col gap-4">
        <div className="flex items-baseline gap-1">
          <img
            src={images[image]}
            alt="deal-image1"
            className="object-cover max-h-96 max"
          />
          <img
            src={image === 2 ? images[0] : images[image + 1]}
            alt="deal-image2"
            className="object-cover max-h-96"
          />
          <img
            src={
              image === 2 || image === 1 ? images[image - 1] : images[image + 2]
            }
            alt="deal-image3"
            className="object-cover max-h-96"
          />
        </div>
        <div className="flex items-center gap-4 justify-end container">
          <button
            onClick={() => dispatch(previous())}
            className="bg-white rounded-full p-2 shadow-md"
          >
            <img src={arrowLeft} alt="arrow-left" className="w-6 h-6" />
          </button>
          <button
            onClick={() => dispatch(next())}
            className="bg-white rounded-full p-2 shadow-md"
          >
            <img src={arrowRight} alt="arrow-right" className="w-6 h-6" />
          </button>
        </div>
      </div>
    </>
  );
};

export default DealsGallery;
