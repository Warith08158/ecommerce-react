import React from "react";
import { Button, STOPSHOP } from "../../../components/components";
import { Link } from "react-router-dom";
import { hamburger } from "../../../assets/Icons/Icons";
import Menu from "../utils/Menu";
import { useDispatch } from "react-redux";
import { open } from "../../../features/menu/menuSlice";

const links = ["Home", "Deals", "New Arrivals", "Packages"];

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <section className="relative">
      <div className="container py-3 flex items-center justify-between">
        <STOPSHOP />
        <div className="hidden sm:flex items-center gap-8">
          <nav className="flex items-center gap-8">
            {links.map((link) => (
              <Link className="text-lightGray text-base" key={link}>
                {link}
              </Link>
            ))}
          </nav>
          <div className="items-center gap-8 hidden md:flex">
            <Link className="text-lightGray text-base">Sign in</Link>
            <Button text={"Sign Up"} />
          </div>
        </div>
        <button className="md:hidden" onClick={() => dispatch(open())}>
          <img src={hamburger} alt="hamburger" className="w-8" />
        </button>
      </div>
      <Menu />
    </section>
  );
};

export default Navbar;
