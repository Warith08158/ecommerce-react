import React from "react";

const Button = ({ text }) => {
  return (
    <div className="bg-black text-white px-8 py-2 rounded-lg shadow-lg text-sm">
      {text}
    </div>
  );
};

export default Button;
