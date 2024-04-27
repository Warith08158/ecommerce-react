import React from "react";
import { hamburger } from "../../../assets/Icons/Icons";
import { useDispatch, useSelector } from "react-redux";
import { close } from "../../../features/menu/menuSlice";

const Menu = () => {
  const { isOpen } = useSelector((store) => store.menu);
  const dispatch = useDispatch();
  return (
    <div>
      {isOpen && (
        <ul className="md:hidden flex bg-white w-[45%] max-w-56 shadow-lg absolute right-0 top-0 bottom-0 flex-col items-start h-screen min-h-80">
          <button
            className=" w-full flex justify-start pl-3 py-3 sm:pr-10"
            onClick={() => dispatch(close())}
          >
            <img src={hamburger} alt="hamburger" className="w-8" />
          </button>
          <div className="px-4 flex flex-col items-start gap-3">
            <li className="sm:hidden text-lightGray text-base">Home</li>
            <li className="sm:hidden text-lightGray text-base">Deals</li>
            <li className="sm:hidden text-lightGray text-base">New Arrivals</li>
            <li className="sm:hidden text-lightGray text-base">Packages</li>
            <li className="text-lightGray text-base">Sign In</li>
            <li className="text-lightGray text-base">Sign Up</li>
            <div className="fixed bottom-0">
              <h3 className="text-sm text-slate-500 pb-2">
                stop and shop once
              </h3>
            </div>
          </div>
        </ul>
      )}
    </div>
  );
};

export default Menu;
