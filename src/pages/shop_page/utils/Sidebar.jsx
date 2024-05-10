import React from "react";
import { products } from "../../../data/products";
import { displayAll } from "../../../features/shopping/shoppingSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  filterByRating,
  filterByPrice,
} from "../../../features/shopping/shoppingSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const items = useSelector((store) => store.shopping.dataCopy);
  const ratings = [];
  const prices = [];
  products.forEach((product) => {
    if (!prices.includes(product.priceCents)) {
      prices.push(product.priceCents);
    }
    if (!ratings.includes(product.rating.stars)) {
      ratings.push(product.rating.stars);
    }
  });

  ratings.sort((a, b) => a - b);
  prices.sort((a, b) => a - b);

  // Calculate the length of each resulting subarray
  const subarrayLength = Math.ceil(prices.length / 5);

  // Split the original array into four subPrices
  const subPrices = [];
  for (let i = 0; i < prices.length; i += subarrayLength) {
    subPrices.push(prices.slice(i, i + subarrayLength));
  }

  // console.log(items);

  return (
    <div className="max-w-md sticky top-28 pr-10">
      <h1 className="font-volkhov text-lightGray font-medium text-2xl lg:text-3xl text-left">
        Filter
      </h1>
      <p className="text-black mt-6">Rating</p>
      <div className="grid grid-cols-3 gap-2 mt-3">
        <div
          className={`${
            items.every(
              (itemRating) => itemRating.rating.stars === items[0].rating.stars
            )
              ? "hover:bg-lightGray/10 hover:text-lightGray cursor-pointer"
              : "bg-lightGray text-white"
          } border border-lightGray rounded-lg flex items-center justify-center px-3 py-1`}
          onClick={() => dispatch(displayAll())}
        >
          All
        </div>
        {ratings.map((rating, i) => (
          <div
            onClick={() => dispatch(filterByRating(rating))}
            key={rating + i + i}
            className={`${
              items.every((itemRating) => itemRating.rating.stars === rating)
                ? "bg-lightGray text-white"
                : "hover:bg-lightGray/10 hover:text-lightGray cursor-pointer"
            } border border-lightGray rounded-lg flex items-center justify-center px-3 py-1`}
          >
            <p>{rating}</p>
          </div>
        ))}
      </div>

      <p className="text-black mt-6">Price</p>
      <div className="mt-3 text-xs text-black space-y-4">
        <div className="cursor-pointer">All</div>
        {subPrices.map((subPrice, i) => (
          <div
            key={i + i}
            className="cursor-pointer"
            onClick={() => {
              // console.log(
              //   products.filter(
              //     (product) =>
              //       product.priceCents >= subPrice[0] &&
              //       product.priceCents <= subPrice[subPrice.length - 1]
              //   )
              // );
              dispatch(filterByPrice(subPrice));
            }}
          >
            ${Math.floor(subPrice[0] / 100)} - $
            {Math.floor(subPrice[subPrice.length - 1] / 100)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
