import React from "react";

const Button = ({ text }) => {
  return (
    <div className="bg-black text-white px-6 py-2 rounded-lg shadow-lg text-base">
      {text}
    </div>
  );
};

export default Button;
