import React from "react";
import { Outlet } from "react-router-dom";
import { woman } from "../assets/images/images";

const Auth = () => {
  return (
    <div className="h-screen min-h-80 flex items-center justify-center">
      <div className="max-w-5xl flex flex-col sm:flex-row items-center shadow-md gap-4 mx-auto border border-lightRed rounded-2xl">
        <div className="flex-1">
          <img
            src={woman}
            alt="woman"
            className=" rounded-none sm:rounded-l-2xl"
          />
        </div>
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Auth;
