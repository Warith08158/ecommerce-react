import React from "react";
import { hamburger } from "../../../assets/Icons/Icons";
import { useDispatch, useSelector } from "react-redux";
import { close } from "../../../features/menu/menuSlice";

const links = ["Home", "Deals", "New Arrivals", "Packages"];
const Menu = () => {
  const { isOpen } = useSelector((store) => store.menu);
  const dispatch = useDispatch();
  return (
    <div>
      {isOpen && (
        <ul className="md:hidden container flex bg-white w-[45%] shadow-md px-4 absolute right-0 top-0 bottom-0 flex-col items-start gap-4 h-screen min-h-80">
          <div className="relative"></div>
          <button
            className=" w-full flex justify-end"
            onClick={() => dispatch(close())}
          >
            <img src={hamburger} alt="hamburger" className="w-8" />
          </button>
          <li className="sm:hidden text-lightGray text-base">Home</li>
          <li className="sm:hidden text-lightGray text-base">Deals</li>
          <li className="sm:hidden text-lightGray text-base">New Arrivals</li>
          <li className="sm:hidden text-lightGray text-base">Packages</li>
          <li>Sign In</li>
          <li className="bg-black text-white px-6 py-2 rounded-lg shadow-lg text-base">
            Sign Up
          </li>
          <div className="fixed bottom-0">
            <h3 className="text-sm text-slate-500 pb-2">stop and shop once</h3>
          </div>
        </ul>
      )}
    </div>
  );
};

export default Menu;
