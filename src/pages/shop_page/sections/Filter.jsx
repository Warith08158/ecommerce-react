import React, { useEffect, useState } from "react";
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
import {
  nextItem,
  previousItem,
  setPaginationState,
} from "../../../features/shopping/shoppingSlice";
import { arrowLeft, arrowRight } from "../../../assets/Icons/Icons";

const Filter = () => {
  const dispatch = useDispatch();
  const [currentPagination, setCurrentPagination] = useState({
    start: 0,
    end: 6,
  });
  const [arrowNum, setArrowNum] = useState({ start: 0, end: 3, num: 1 });
  const {
    dataCopy: products,
    paginationState: num,
    nextTo,
  } = useSelector((store) => store.shopping);
  useEffect(() => {
    setCurrentPagination({
      start: 0,
      end: 6,
      num: 0,
    });
    setArrowNum({ start: 0, end: 3, num: 1 });
  }, [products]);
  console.log(num);
  const nextGallery = [];
  for (let index = 0; index < Math.floor(products.length / 6); index++) {
    nextGallery.push(index + 1);
  }
  const remainder = products.length % 6;
  const pages = remainder
    ? Math.floor(products.length / 6) + 1
    : Math.floor(products.length / 6);

  const pagesArray = [];

  for (let index = 0; index < pages; index++) {
    pagesArray.push(index);
  }

  // console.log(data);

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
        {products.length < 1 ? (
          <div className="w-full">
            <h1 className="text-center mt-3 md:mt-0">Filter Not found</h1>
          </div>
        ) : (
          <div className="grid md:pl-20 lg:pl-32 container grid-cols-1 xxs:grid-cols-2 items-end lg:grid-cols-3 gap-8 w-full">
            {products
              .slice(currentPagination.start, currentPagination.end)
              .map((product, i) => (
                <div
                  key={product.id}
                  className="flex justify-center rounded-md shadow-md cursor-pointer"
                >
                  <div className="flex p-4 sm:w-48 flex-col gap-3">
                    <div className="flex justify-center max-h-44 max-w-44">
                      <img
                        src={`/${product.image}`}
                        alt={product.name}
                        className="object-contain w-full h-full"
                      />
                    </div>

                    <div className="flex flex-col items-start gap-2 mt-4">
                      <Link
                        to={`shopping/product/${product.id}`}
                        className="text-xs max-w-[250px]"
                      >
                        {product.name}
                      </Link>
                      <img
                        src={`/${
                          ratings.find(
                            (rating) => product.rating.stars === rating.rating
                          ).image
                        }`}
                        alt="rating"
                        className="h-4 object-contain"
                      />
                    </div>

                    <p className="text-xs text-lightGray mt-1">
                      ({product.rating.count}) reviews
                    </p>
                    <div className="mt-1 flex items-center justify-between">
                      <p className="text-base text-lightGray oldstyle-nums">
                        ${Math.floor(product.priceCents / 100)}
                      </p>
                      <p className="text-sm text-lightGrayWhite line-through">
                        ${Math.floor((product.priceCents / 100) * 2)}
                      </p>
                    </div>
                    <button
                      onClick={() => console.log("clicked")}
                      className="bg-orange-500 text-white rounded-md py-1 mt-2"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
      {products.length > 6 ? (
        <div className="mt-8 container flex items-center justify-end md:pr-8 gap-3">
          {nextTo > 1 ? (
            <button onClick={() => dispatch(previousItem(nextTo - 3))}>
              <img src={arrowLeft} alt="arrow" className="w-4 h-4" />
            </button>
          ) : null}
          {products.length > 0 && (
            <div className="flex items-center gap-3">
              {pagesArray.slice(0, 3).map((page, i) => (
                <button
                  key={page}
                  className={`bg-lightGray text-black rounded-full py-1 px-3 ${
                    currentPagination.num === page
                      ? " bg-lightGray/30 text-black "
                      : "bg-lightGray/5 text-black"
                  }`}
                  onClick={() =>
                    setCurrentPagination({
                      start: (page * 6, page * 6),
                      end: (page * 6, page * 6) + 6,
                      num: page,
                    })
                  }
                >
                  {page + 1}
                </button>
              ))}
            </div>
          )}
          {pagesArray.length > 3 ? (
            <button>
              <img
                src={arrowRight}
                alt="arrow"
                className="w-6"
                onClick={() => console.log("clicked")}
              />
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
