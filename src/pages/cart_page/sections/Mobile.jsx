import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { products } from "../../../data/products";
import {
  addToCart,
  reduceItem,
  removeFromCart,
} from "../../../features/cart/cartSlice";

const Mobile = () => {
  const { cartItem } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  return (
    <>
      {cartItem.map((item) => (
        <div key={item.id} className="border border-veryLightGray py-4">
          <div className="container flex-wrap flex justify-between sm:items-start gap-4">
            <div className="flex items-start gap-4 sm:gap-6 flex-wrap">
              <img
                src={`/${
                  products.find((product) => product.id === item.id).image
                }`}
                alt={`${item.id}`}
                className="h-32 w-32 h- object-containm"
              />
              <div>
                <p className="max-w-[180px] md:max-w-[300px] text-lightGray font-volkhov font-semibold">
                  {products.find((product) => product.id === item.id).name}
                </p>

                <button
                  className="text-sm text-red-600 cursor-pointer"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Remove Item
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row sm:gap-4 items-stretch">
              <div className="flex gap-2 sm:flex-col items-center text-sm text-lightGray">
                <p>Price:</p>
                <p>
                  {" "}
                  $
                  {Math.floor(
                    products.find((product) => product.id === item.id)
                      .priceCents / 100
                  )}
                </p>
              </div>
              <div className="flex gap-2 sm:flex-col items-center text-sm text-lightGray">
                <p className="hidden sm:block">Quantity:</p>
                <div className="flex items-center bg-gray-100 border border-gray-200">
                  <button
                    className={` ${
                      cartItem.find((product) => product.id === item.id)
                        ?.quantity
                        ? "cursor-pointer"
                        : "select-none cursor-not-allowed"
                    } px-3 py-[0.1rem]`}
                    onClick={() => dispatch(reduceItem(item.id))}
                  >
                    -
                  </button>
                  <p className="cursor-pointer px-3 py-[0.1rem] text-sm">
                    {cartItem.find((product) => product.id === item.id)
                      ?.quantity
                      ? cartItem.find((product) => product.id === item.id)
                          .quantity
                      : 0}
                  </p>
                  <button
                    className="cursor-pointer px-3 py-[0.1rem]"
                    onClick={() => dispatch(addToCart(item.id))}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex gap-2 sm:flex-col items-center text-sm text-lightGray">
                <p>Total:</p>
                <p>
                  $
                  {Math.floor(
                    products.find((product) => product.id === item.id)
                      .priceCents / 100
                  ) * item.quantity}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Mobile;
