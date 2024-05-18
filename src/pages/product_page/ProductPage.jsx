import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../data/products";

const ProductPage = () => {
  const { id: productId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const item = products.find((product) => product.id === productId);
  const handleLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };
  return (
    <section>
      <div className="relative h-96 w-[90%] mx-auto">
        <img
          src={`/${item.image}`}
          alt=""
          className="absolute w-full h-full object-cover"
          onLoad={handleLoad}
          onError={handleError}
        />
        {isLoading ||
          (hasError && (
            <div className="absolute w-full h-full object-cover bg-gray-100">
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
          ))}
      </div>
      <h2>{item.name}</h2>
    </section>
  );
};

export default ProductPage;
