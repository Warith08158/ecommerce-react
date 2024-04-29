import React, { useRef } from "react";
import { keywords } from "../../../data/data";
import { arrowLeft, arrowRight } from "../../../assets/Icons/Icons";
import NewArrivalsGallery from "../utils/NewArrivalsGallery";
import {
  showAll,
  reset,
} from "../../../features/newArrivalsGaallery/newArrivalsGallerySlice";
import { useDispatch, useSelector } from "react-redux";
const NewArrivals = () => {
  const previous = useRef();
  const dispatch = useDispatch();
  const { filterBy } = useSelector((store) => store.newArrivalsGallery);

  const previousClicked = (type) => {
    if (type === "previous") {
      return (previous.current.scrollLeft -= 50);
    }
    previous.current.scrollLeft += 50;
  };
  return (
    <section className="py-20 container">
      <div>
        <h2 className="font-volkhov text-lightGray font-medium text-2xl lg:text-3xl md:text-center">
          New Arrivals
        </h2>
        <p className="mt-4 md:text-center max-w-[600px] mx-auto text-base text-whiteGray">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          nulla ut, tenetur, voluptatem ipsam soluta ex odit iusto cupiditate
          pariatur, nihil possimus dolore accusamus beatae ratione eius repellat
          commodi id.
        </p>
        <div className="relative max-w-[70%] mx-auto">
          <div
            ref={previous}
            className="text-sm mt-10 flex items-center gap-2 justify-between w-full overflow-x-auto keywords mx-auto"
          >
            <button
              onClick={() => {
                dispatch(reset());
                dispatch(showAll("All"));
              }}
              className={` px-6 rounded-md py-2 cursor-pointer  ${
                filterBy === "All"
                  ? "bg-black text-white"
                  : "bg-grayWhite text-lightGrayWhite"
              }`}
            >
              All
            </button>
            {keywords.map((keyword) => (
              <button
                onClick={() => {
                  dispatch(reset());
                  dispatch(showAll(keyword));
                }}
                key={keyword}
                className={`px-6 rounded-md py-2 cursor-pointer  ${
                  filterBy === keyword
                    ? "bg-black text-white"
                    : "bg-grayWhite text-lightGrayWhite"
                }`}
              >
                {keyword.replace(" ", "")}
              </button>
            ))}
            <button
              onClick={() => previousClicked("previous")}
              className="absolute top-0 -left-8 bottom-0"
            >
              <img
                src={arrowLeft}
                alt="arrow-left"
                className="w-6 h-6 rounded-full "
              />
            </button>
            <button
              onClick={() => previousClicked("next")}
              className="absolute top-0 -right-8 bottom-0"
            >
              <img
                src={arrowRight}
                alt="arrow-left"
                className="w-6 h-6 rounded-full "
              />
            </button>
          </div>
        </div>
        <NewArrivalsGallery />
      </div>
    </section>
  );
};

export default NewArrivals;
