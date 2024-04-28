import React from "react";
import { useSelector } from "react-redux";

const Menu = () => {
  const { isOpen } = useSelector((store) => store.menu);
  return (
    <div className="relative">
      {isOpen && (
        <ul className="md:hidden py-4 flex bg-white w-[45%] max-w-56 shadow-sm absolute right-0 top-0 bottom-0 flex-col items-start h-screen min-h-80">
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
    </div>
  );
};

export default Menu;
