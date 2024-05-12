import React, { useState } from "react";
import Sidebar from "../utils/Sidebar";
import { Link } from "react-router-dom";
import { ratings } from "../../../data/ratings";
import { useDispatch, useSelector } from "react-redux";
import {
  Footer,
  NewsLetter,
  PinkyBinder,
} from "../../../components/components";
import GalleryImages from "../../../components/GalleryImages";
import { setPaginationState } from "../../../features/shopping/shoppingSlice";
import { arrowLeft, arrowRight } from "../../../assets/Icons/Icons";

const Filter = () => {
  const dispatch = useDispatch();
  const [nextTo, setNextTo] = useState(1);
  const { dataCopy: products, paginationState: num } = useSelector(
    (store) => store.shopping
  );

  const nextGallery = [];
  for (let index = 0; index < Math.floor(products.length / 6); index++) {
    nextGallery.push(index + 1);
  }

  return (
    <section>
      <div className="md:flex md:container">
        <div className="sticky top-0 md:hidden bg-white shadow-sm">
          <div className="container">
            <Sidebar />
          </div>
        </div>
        <div className="hidden md:block">
          <Sidebar />
        </div>
        {products.length === 0 ? (
          <div className="w-full">
            <h1 className="text-center mt-3 md:mt-0">Filter Not found</h1>
          </div>
        ) : (
          <div className="grid md:pl-20 lg:pl-32 container grid-cols-1 xxs:grid-cols-2 items-end lg:grid-cols-3 gap-8 w-full">
            {Array.from({ length: 6 }, (_, index) => (
              <div key={index}>
                <div className="flex justify-center rounded-md shadow-md cursor-pointer">
                  {products[index + num]?.name ? (
                    <div className="flex p-4 sm:w-48 flex-col gap-3">
                      <div className="flex justify-center max-h-44 max-w-44">
                        <img
                          src={`/${products[index + num]?.image}`}
                          alt={products[index + num]?.name}
                          className="object-contain w-full h-full"
                        />
                      </div>

                      <div className="flex flex-col items-start gap-2 mt-4">
                        <Link
                          to={`/shopping/product/${products[index + num]?.id}`}
                          className="text-xs max-w-[250px]"
                        >
                          {products[index + num]?.name}
                        </Link>
                        <img
                          src={`/${
                            ratings.find(
                              (rating) =>
                                products[index + num]?.rating.stars ===
                                rating.rating
                            )?.image
                          }`}
                          alt="rating"
                          className="h-4 object-contain"
                        />
                      </div>

                      <p className="text-xs text-lightGray mt-1">
                        ({products[index + num]?.rating.count}) reviews
                      </p>
                      <div className="mt-1 flex items-center justify-between">
                        <p className="text-base text-lightGray oldstyle-nums">
                          ${Math.floor(products[index + num]?.priceCents / 100)}
                        </p>
                        <p className="text-sm text-lightGrayWhite line-through">
                          $
                          {Math.floor(
                            (products[index + num]?.priceCents / 100) * 2
                          )}
                        </p>
                      </div>
                      <button
                        onClick={() => console.log("clicked")}
                        className="bg-orange-500 text-white rounded-md py-1 mt-2"
                      >
                        Add to Cart
                      </button>
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {products.length > 6 ? (
        <div className="mt-8 container flex items-center justify-end md:pr-8 gap-3">
          {nextTo > 1 ? (
            <button onClick={() => setNextTo((prev) => prev - 1)}>
              <img src={arrowLeft} alt="arrow" className="w-4 h-4" />
            </button>
          ) : null}
          {Array.from({ length: 3 }, (_, index) => (
            <button
              key={index + nextTo}
              onClick={() =>
                dispatch(
                  setPaginationState(
                    index + nextTo - 1 + 5 * (index + nextTo - 1)
                  )
                )
              }
              className={`${
                num / 6 === index + nextTo - 1
                  ? "bg-lightGray/50 text-black pointer-events-none"
                  : "bg-lightGray/5 text-black"
              } py-1 px-3 rounded-full`}
            >
              {index + nextTo}
            </button>
          ))}
          {products.length % 6 ? (
            <button
              onClick={() =>
                dispatch(setPaginationState(num + 6 * nextGallery.length))
              }
              className={`${
                num / 6 === nextGallery.length
                  ? "bg-lightGray/50 text-black pointer-events-none"
                  : "bg-lightGray/5 text-black"
              } py-1 px-3 rounded-full`}
            >
              {nextGallery.length + 1}
            </button>
          ) : null}
          {nextGallery.length > 3 ? (
            <button
              onClick={() => setNextTo((prev) => prev + 1)}
              className={`${
                nextTo === nextGallery.length - 2 ? "hidden" : "cursor-pointer"
              }`}
            >
              <img src={arrowRight} alt="arrow" className="w-4 h-4" />
            </button>
          ) : null}
        </div>
      ) : null}
      <div className="mt-10">
        <PinkyBinder />
        <GalleryImages />
        <NewsLetter />
        <Footer />
      </div>
    </section>
  );
};

export default Filter;
