import React from "react";
import { Navbar } from "../components/components";
import { Outlet } from "react-router-dom";

const Shopping = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Shopping;
