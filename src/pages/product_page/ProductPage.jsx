import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../../data/products";
import { ratings } from "../../data/ratings";
import PinkyBinder from "../../components/PinkyBinder";
import Features from "../../components/Features";
import Deals from "../../components/Deals";
import NewsLetter from "../../components/NewsLetter";
import Footer from "../../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  reduceItem,
  removeFromCart,
} from "../../features/cart/cartSlice";
const ProductPage = () => {
  const { id: productId } = useParams();
  const item = products.find((product) => product.id === productId);
  const dispatch = useDispatch();
  const { cartItem } = useSelector((store) => store.cart);
  console.log(cartItem);
  return (
    <section className="mt-16">
      <div className="container flex flex-col sm:flex-row sm:items-start gap-6 ">
        <div className="flex items-center justify-center sm:w-[50%]">
          <img
            src={`/${item.image}`}
            alt=""
            className="w-full max-h-80 object-contain"
          />
        </div>
        <div className="flex flex-col items-start gap-3 sm:w-[50%]">
          <h2 className="text-2xl font-volkhov mt-2">{item.name}</h2>
          <img
            src={`/${
              ratings.find((rating) => item.rating.stars === rating.rating)
                .image
            }`}
            alt="rating"
            className="h-4 object-contain"
          />
          <div className="flex items-center gap-2">
            <p>${Math.floor(item.priceCents / 100)}</p>
            <p className="text-sm text-lightGrayWhite line-through">
              ${Math.floor((item.priceCents / 100) * 2)}
            </p>
            <p className="bg-red-500 text-xs text-white px-2 py-1 rounded-xl shadow-md">
              save 10%
            </p>
          </div>
          <div className="text-lightGrayWhite text-sm">
            {item.rating.count} people have bougth this product
          </div>
          <div className="bg-red-100 text-red-900 text-sm px-2 py-1 border border-red-200 mt-2">
            Hurry Up! sales ends soon!
          </div>
          <div className="space-y-0 mt-2 w-full">
            <p className="mb-2">Quantity</p>
            <div className="flex items-stretch gap-3">
              <div className="flex items-center bg-gray-100 border border-gray-200">
                <button
                  className={` ${
                    cartItem.find((product) => product.id === item.id)?.quantity
                      ? "cursor-pointer"
                      : "select-none cursor-not-allowed"
                  } px-3 py-1`}
                  onClick={() => dispatch(reduceItem(item.id))}
                >
                  -
                </button>
                <p className="cursor-pointer px-3 py-1 text-sm">
                  {cartItem.find((product) => product.id === item.id)?.quantity
                    ? cartItem.find((product) => product.id === item.id)
                        .quantity
                    : 0}
                </p>
                <button
                  className="cursor-pointer px-3 py-1"
                  onClick={() => dispatch(addToCart(item.id))}
                >
                  +
                </button>
              </div>
              <button
                onClick={() => dispatch(addToCart(item.id))}
                className="flex-1 bg-transparent border border-1 border-gray-500 rounded-md text-sm font-volkhov"
              >
                Add to cart
              </button>
            </div>
          </div>
          {cartItem.find((product) => product.id === item.id)?.quantity && (
            <button
              className="text-sm text-red-600 cursor-pointer"
              onClick={() => dispatch(removeFromCart(item.id))}
            >
              Remove Item
            </button>
          )}
          {cartItem.find((product) => product.id === item.id)?.quantity && (
            <div className="text-sm flex items-center gap-2">
              <p className="text-lightGray font-volkhov text-md">Total:</p>
              <p className="text-lightGray font-volkhov text-sm">
                {" "}
                $
                {Math.floor(
                  (cartItem.find((product) => product.id === item.id)
                    ?.quantity *
                    products.find((product) => product.id === item.id)
                      .priceCents) /
                    100
                )}
              </p>
            </div>
          )}
          <div className="flex items-center gap-3 flex-wrap text-sm mt-4">
            <div className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                />
              </svg>
              <p>Ask a Question</p>
            </div>
            <div className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                />
              </svg>
              <p>Share</p>
            </div>
          </div>
          <div className="mt-3 mb-16">
            <div className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
                />
              </svg>
              <div className="flex items-center gap-1 text-sm text-lightGray">
                <p>Estimated Delivery</p>
                <p>July 8'0 clock</p>
              </div>
            </div>
            <div className="flex items-center gap-1 mt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>

              <div className="flex items-center gap-1 text-sm text-lightGray">
                <p>Free shipping & Returns</p>
                <p>on all Orders over $75</p>
              </div>
            </div>
            <div className="mt-8 sm:mt-3 w-full">
              <img
                src={`/PaymentOptions.jpg`}
                alt="payment option"
                className="bg-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      <PinkyBinder />
      <Features />
      <Deals />
      <NewsLetter />
      <Footer />
    </section>
  );
};

export default ProductPage;
