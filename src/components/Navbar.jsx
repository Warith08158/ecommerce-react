import React from "react";
import { STOPSHOP } from "./components";
import { Link, useLocation } from "react-router-dom";
import Menu from "./Menu";
import {
  cartBtn,
  favouriteBtn,
  hamburger,
  personBtn,
  searchBtn,
} from "../assets/Icons/Icons";
import { toggleMenu } from "../features/menu/menuSlice";
import { useDispatch } from "react-redux";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Shop",
    path: "/shopping/shop",
  },
  {
    name: "Products",
    path: "/products",
  },
  {
    name: "pages",
    path: "/pages",
  },
];
const Navbar = () => {
  const { pathname } = useLocation();
  const pathName = pathname.replace("/shopping/s", "S");
  const dispatch = useDispatch();
  return (
    <section className="border-b border-b-veryLightGray sticky top-0 z-20 bg-white">
      <div className="container mx-auto flex items-center justify-between py-2 sm:py-0">
        <STOPSHOP />
        <nav className="hidden sm:flex items-center gap-8">
          {links.map((link) => (
            <Link
              className={`${
                pathName === link.name ? "border-b border-b-lightGray" : ``
              } text-lightGray text-base py-3 `}
              key={link.name}
              to={link.path}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <button className="md:hidden" onClick={() => dispatch(toggleMenu())}>
          <img src={hamburger} alt="hamburger" className="w-8" />
        </button>

        <div className="hidden md:flex md:flex-row md:items-center md:gap-5">
          <img src={searchBtn} alt="search" className="w-4" />
          <img src={personBtn} alt="person" className="w-4" />
          <img src={favouriteBtn} alt="favourite" className="w-4" />
          <img src={cartBtn} alt="cart" className="w-4" />
        </div>
      </div>
      <Menu />
    </section>
  );
};

export default Navbar;
