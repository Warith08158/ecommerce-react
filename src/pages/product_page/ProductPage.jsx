import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../../data/products";

const ProductPage = () => {
  const { id: productId } = useParams();
  const item = products.find((product) => product.id === productId);
  return (
    <section>
      <div className="relative h-96 w-[90%] mx-auto">
        <img
          src={`/${item.image}`}
          alt=""
          className="absolute w-full h-full object-cover"
        />
      </div>
      <h2>{item.name}</h2>
    </section>
  );
};

export default ProductPage;
