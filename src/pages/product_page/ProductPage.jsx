import React from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { id: productId } = useParams();
  return <div>{productId}</div>;
};

export default ProductPage;
