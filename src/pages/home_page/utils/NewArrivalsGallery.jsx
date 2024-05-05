import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { showMore } from "../../../features/newArrivalsGaallery/newArrivalsGallerySlice";
import { ratings } from "../../../data/ratings";
import { Link } from "react-router-dom";

const NewArrivalsGallery = () => {
  const dispatch = useDispatch();
  const { productsCopy: products, displayProducts } = useSelector(
    (store) => store.newArrivalsGallery
  );
  const allProducts = [...products];

  while (allProducts.length > displayProducts) {
    allProducts.pop();
  }

  return (
    <div>
      <div className="lg:container mt-16 mx-auto items-center grid xxxs:grid-cols-1 xxs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-6">
        {allProducts.map((product) => (
          <Link
            to={`shopping/product/${product.id}`}
            key={product.id}
            className="flex justify-center rounded-md shadow-lg cursor-pointer"
          >
            <div className="flex p-4 sm:w-48 flex-col gap-3">
              <div className="flex justify-center">
                <img
                  src={`/${product.image}`}
                  alt={product.name}
                  className="object-contain max-h-44 sm:w-32 sm:h-32"
                />
              </div>

              <div className="flex flex-col items-start gap-2 mt-4">
                <p className="text-xs max-w-[250px]">{product.name}</p>
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
            </div>
          </Link>
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
