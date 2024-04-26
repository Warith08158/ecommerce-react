import React from "react";
import { Outlet } from "react-router-dom";
import { woman } from "../assets/images/images";

const Auth = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="max-w-5xl flex flex-col sm:flex-row items-center sm:shadow-md gap-4 mx-auto sm:border sm:border-lightRed sm:rounded-b-2xl">
        <div className="flex-1">
          <img src={woman} alt="woman" className="sm:rounded-bl-2xl" />
        </div>
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Auth;
