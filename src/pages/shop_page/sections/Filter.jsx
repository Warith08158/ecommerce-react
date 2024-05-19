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
import { arrowLeft, arrowRight } from "../../../assets/Icons/Icons";
import { addToCart } from "../../../features/cart/cartSlice";

const Filter = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [currentPagination, setCurrentPagination] = useState({
    start: 0,
    end: 6,
    num: 0,
  });
  const [arrowNum, setArrowNum] = useState({
    start: 0,
    end: 3,
    num: 0,
  });
  const dispatch = useDispatch();
  const {
    dataCopy: products,
    paginationState: num,
    nextTo,
  } = useSelector((store) => store.shopping);
  const { cartItem } = useSelector((store) => store.cart);
  useEffect(() => {
    setCurrentPagination({
      start: 0,
      end: 6,
      num: 0,
    });
    setArrowNum({
      start: 0,
      end: 3,
      num: 0,
    });
  }, [products]);
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

  const handleLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  console.log(cartItem);

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
          <div className="w-full flex justify-end container">
            <div className="grid grid-cols-1 xxs:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-3xl">
              {products
                .slice(currentPagination.start, currentPagination.end)
                .map((product, i) => (
                  <div
                    key={product.id}
                    className="rounded-md shadow-md cursor-pointer h-[350px]"
                  >
                    <div className="flex flex-col gap-3">
                      <Link to={`/shopping/product/${product.id}`}>
                        <img
                          src={`/${product.image}`}
                          alt={product.name}
                          className={`object-contain h-36 ${
                            isLoading ? "hidden" : "block mx-4"
                          }`}
                          onLoad={handleLoad}
                          onError={handleError}
                        />
                      </Link>
                      {isLoading && (
                        <div className="h-36 bg-gray-100 animate-pulse flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-12 h-12 text-gray-600"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                            />
                          </svg>
                        </div>
                      )}
                      {hasError && <div className="h-36">loading...</div>}
                      <div className="flex flex-col items-start gap-2 mt-4 px-4">
                        <Link
                          to={`/shopping/product/${product.id}`}
                          className="text-xs max-w-[250px] truncate w-[90%]"
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

                      <p className="text-xs text-lightGray mt-1 px-4">
                        ({product.rating.count}) reviews
                      </p>
                      <div className="mt-1 flex items-center justify-between px-4">
                        <p className="text-base text-lightGray oldstyle-nums">
                          ${Math.floor(product.priceCents / 100)}
                        </p>
                        <p className="text-sm text-lightGrayWhite line-through">
                          ${Math.floor((product.priceCents / 100) * 2)}
                        </p>
                      </div>
                      <button
                        className="bg-orange-500 text-white rounded-md py-1 mt-2 mx-4"
                        onClick={() => dispatch(addToCart(product.id))}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
      {products.length > 6 ? (
        <div className="mt-8 container flex items-center justify-end md:pr-8 gap-3">
          <button
            className={`${arrowNum.start > 0 ? "block" : "hidden"}`}
            onClick={() =>
              setArrowNum({
                start: arrowNum.start - 3,
                end: arrowNum.end - 3,
              })
            }
          >
            <img src={arrowLeft} alt="arrow" className="w-6" />
          </button>
          {products.length > 0 && (
            <div className="flex items-center gap-3">
              {pagesArray.slice(arrowNum.start, arrowNum.end).map((page, i) => (
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
            <button
              onClick={() => {
                setArrowNum({
                  start: arrowNum.start + 3,
                  end: arrowNum.end + 3,
                });
              }}
              className={`${
                arrowNum.end > pagesArray.length ? "hidden" : null
              }`}
            >
              <img src={arrowRight} alt="arrow" className="w-6" />
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
