import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { showMore } from "../../../features/newArrivalsGaallery/newArrivalsGallerySlice";
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
      <div className="container mt-12 w-[85%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {allProducts.map((product) => (
          <div key={product.id} className="bg-red-100 h-60">
            {product.id}
          </div>
        ))}
      </div>
      {products.length > 9 && allProducts.length !== products.length && (
        <div className="mt-8  flex justify-center">
          <button
            onClick={() => dispatch(showMore())}
            className="text-sm text-black py-2 px-4 rounded-md shadow-md bg-veryLightGray"
          >
            Load more...
          </button>
        </div>
      )}
    </div>
  );
};

export default NewArrivalsGallery;
