import React from "react";
import { arrowLeft, arrowRight } from "../../../assets/Icons/Icons";
import { useDispatch, useSelector } from "react-redux";
import {
  next,
  previous,
} from "../../../features/Testimonials/TestimonialSlice";
import { ratings } from "../../../data/ratings";

const TestimonialCard = () => {
  const testimonials = useSelector((store) => store.testimonial);
  const { card1, card2, card3 } = testimonials;
  const testimonials_ = testimonials.testimonials_;
  const dispatch = useDispatch();
  return (
    <div className="lg:container">
      <div className="mt-12 w-full flex justify-center items-center">
        <div className="shadow-lg hidden md:block pl-6 pt-4 pb-24 rounded-l-md w-[130px] h-[150px]">
          <img
            src={testimonials_[card1].image}
            alt="image"
            className="w-16 h-16 object-cover rounded-full"
          />
        </div>
        <div className="px-6 py-4 rounded-lg shadow-lg flex flex-col sm:flex-row gap-5">
          <div className="flex justify-center ">
            <img
              src={testimonials_[card2].image}
              alt="testimonialImage1"
              className="w-24 h-24 object-cover rounded-full"
            />
          </div>
          <div>
            <p className="text-black text-sm text-center sm:text-left font-light max-w-[300px]">
              "{testimonials_[card2].comment}"
            </p>
            <div className="flex justify-center sm:justify-start">
              <img
                src={`/${
                  ratings.find(
                    (rating) => testimonials_[card2].rating === rating.rating
                  ).image
                }`}
                alt="rating"
                className="w-20 mt-4"
              />
            </div>
            <div className="flex justify-center sm:justify-start">
              <hr className="w-1/2 border-t border-gray-300 mt-4" />
            </div>
            <h2 className="font-volkhov text-xl text-lightGray mt-4 text-center sm:text-start">
              {testimonials_[card2].name}
            </h2>
            <p className="text-center sm:text-start mt-1 text-lightGray text-sm">
              {testimonials_[card3].occupation}
            </p>
          </div>
        </div>
        <div className="shadow-lg hidden md:block pr-6 pt-4 pb-24 rounded-r-md w-[130px] h-[150px]">
          <p className="text-black text-sm text-center sm:text-left font-light">
            {testimonials_[card3].paragraph}"
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <div className="flex items-center gap-4">
          <button
            onClick={() => dispatch(previous(card1))}
            className="bg-white rounded-full p-2 shadow-md"
          >
            <img src={arrowLeft} alt="previous" className=" w-6 h-6" />
          </button>
          <button
            onClick={() => dispatch(next(card3))}
            className="bg-white rounded-full p-2 shadow-md"
          >
            <img src={arrowRight} alt="previous" className=" w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
