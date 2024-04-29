import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { showMore } from "../../../features/newArrivalsGaallery/newArrivalsGallerySlice";
import { rating } from "../../../assets/Ratings/ratings.js";

const NewArrivalsGallery = () => {
  const dispatch = useDispatch();
  const { productsCopy: products, displayProducts } = useSelector(
    (store) => store.newArrivalsGallery
  );
  const allProducts = [...products];

  while (allProducts.length > displayProducts) {
    allProducts.pop();
  }

  // ../../../..

  // ../../../.." +

  return (
    <div>
      {/* <img src={rating(4)} alt="rating" className="w-24 bg-black" /> */}
      <div className="container mt-16 w-[85%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
        {allProducts.map((product) => (
          <div key={product.id} className="flex justify-center">
            <div className="flex items-col items-start justify-end p-3 w-48 rounded-md shadow-lg flex-col gap-3">
              <img
                src={`${"/src/" + product.image}`}
                alt={product.name}
                className="object-cover w-32 h-32"
              />
              <p className="text-xs">{product.name}</p>
              <img
                src={rating(product.rating.stars)}
                alt="rating"
                className="h-4 object-contain"
              />
            </div>
          </div>
        ))}
      </div>
      {products.length > 8 && allProducts.length !== products.length && (
        <div
          className="mt-12  flex justify-center cursor-pointer "
          onClick={() => dispatch(showMore())}
        >
          <button
            onClick={() => dispatch(showMore())}
            className=" cursor-pointer text-sm text-white py-2 px-4 rounded-md shadow-md bg-black"
          >
            Load more...
          </button>
        </div>
      )}
    </div>
  );
};

export default NewArrivalsGallery;
