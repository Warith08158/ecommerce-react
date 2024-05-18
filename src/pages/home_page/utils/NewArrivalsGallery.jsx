import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showMore } from "../../../features/newArrivalsGaallery/newArrivalsGallerySlice";
import { ratings } from "../../../data/ratings";
import { Link } from "react-router-dom";

const NewArrivalsGallery = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const { productsCopy: products, displayProducts } = useSelector(
    (store) => store.newArrivalsGallery
  );
  const allProducts = [...products];

  while (allProducts.length > displayProducts) {
    allProducts.pop();
  }
  const handleLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };
  return (
    <div>
      <div className="lg:container mt-16 mx-auto items-end grid xxs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-6">
        {allProducts.map((product) => (
          <div
            key={product.id}
            className="rounded-md shadow-md cursor-pointer h-[350px]"
          >
            <div className="flex flex-col gap-3">
              <img
                src={`/${product.image}`}
                alt={product.name}
                className={`object-contain h-36 ${
                  isLoading ? "hidden" : "block mx-4"
                }`}
                onLoad={handleLoad}
                onError={handleError}
              />
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
              <button className="bg-orange-500 text-white rounded-md py-1 mt-2 mx-4">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      {products.length > 8 && allProducts.length !== products.length && (
        <div className="mt-12  flex justify-center">
          <div
            onClick={() => dispatch(showMore())}
            className="cursor-pointer text-sm text-white py-2 px-4 rounded-md shadow-md bg-black"
          >
            Load more...
          </div>
        </div>
      )}
    </div>
  );
};

export default NewArrivalsGallery;
