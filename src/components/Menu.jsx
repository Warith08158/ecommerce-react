import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  cartBtn,
  favouriteBtn,
  personBtn,
  searchBtn,
} from "../assets/Icons/Icons";

const Menu = () => {
  const { isOpen } = useSelector((store) => store.menu);
  const loaction = useLocation();
  const { pathname } = location;
  const { cartItem } = useSelector((store) => store.cart);
  const totalItem = cartItem.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="relative">
      {pathname === "/" && isOpen && (
        <ul className="md:hidden py-4 flex bg-white w-[70%] max-w-56 shadow-md absolute right-0 top-0 bottom-0 flex-col items-start h-screen min-h-80 border-t border-t-veryLightGray">
          <div className="px-4 flex flex-col items-start gap-3">
            <li className="sm:hidden text-lightGray text-base">Home</li>
            <li className="sm:hidden text-lightGray text-base">Deals</li>
            <li className="sm:hidden text-lightGray text-base">New Arrivals</li>
            <li className="sm:hidden text-lightGray text-base">Packages</li>
            <li className="text-lightGray text-base">Sign In</li>
            <li className="text-lightGray text-base">Sign Up</li>
          </div>
        </ul>
      )}
      {pathname === "/shopping/shop" && isOpen && (
        <ul className="md:hidden py-4 flex bg-white w-[70%] max-w-56 shadow-md absolute right-0 top-0 bottom-0 flex-col items-start h-screen min-h-80 border-t border-t-veryLightGray">
          <div className="px-4 flex flex-col items-start gap-3">
            <li className="sm:hidden text-lightGray text-base">Home</li>
            <li className="sm:hidden text-lightGray text-base">Shop</li>
            <li className="sm:hidden text-lightGray text-base">Products</li>
            <li className="sm:hidden text-lightGray text-base">Pages</li>
            <div className="flex flex-row items-center gap-5 py-4">
              <img src={searchBtn} alt="search" className="w-4" />
              <img src={personBtn} alt="person" className="w-4" />
              <img src={favouriteBtn} alt="favourite" className="w-4" />
              <div className="relative">
                <img src={cartBtn} alt="cart" className="w-4" />
                <div className="absolute -top-2 -right-4 px-[0.5rem] rounded-full text-xs text-white py-[0.125rem] bg-orange-400">
                  {totalItem}
                </div>
              </div>
            </div>

            <li className="text-lightGray text-base">Sign In</li>
            <li className="text-lightGray text-base">Sign Up</li>
          </div>
        </ul>
      )}
    </div>
  );
};

export default Menu;
