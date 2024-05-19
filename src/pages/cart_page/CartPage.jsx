import React from "react";
import Mobile from "./sections/Mobile";
import { useSelector } from "react-redux";
import Total from "./sections/Total";
import NewsLetter from "../../components/NewsLetter";
import Footer from "../../components/Footer";

const CartPage = () => {
  const { cartItem } = useSelector((store) => store.cart);
  console.log(cartItem);
  return (
    <section className="">
      <div className="container">
        <h1 className="mt-8 nlg:mt-20 lg:mb-4 font-volkhov text-lightGray font-medium text-2xl lg:text-3xl text-left md:text-center">
          Shopping Cart
        </h1>
        <h4 className="text-lightGray text-base text-left md:text-center mb-8 md:mb-20">
          Home - Your Shopping Cart
        </h4>
      </div>

      {cartItem.length === 0 ? (
        <h1 className="container mt-8 nlg:mt-20 lg:mb-4 font-volkhov text-lightGray font-medium text-2xl lg:text-3xl text-left md:text-center">
          Your Bag is Empty
        </h1>
      ) : (
        <>
          <div>
            <Mobile />
          </div>
          <Total />
        </>
      )}
      <NewsLetter />
      <Footer />
    </section>
  );
};

export default CartPage;
