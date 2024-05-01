import React from "react";
import { STOPSHOP } from "./components";
import { Link } from "react-router-dom";
const Links = [
  "Support Center",
  "Invoicing",
  "Contract",
  "Careers",
  "Blog",
  "FAQs",
];
const Footer = () => {
  return (
    <section className="py-4 border-t border-t-veryLightGray">
      <div className="container ">
        <div className="flex flex-col gap-4 justify-between sm:flex-row">
          <STOPSHOP />
          <div className="flex flex-col justify-start sm:flex-row sm:justify-between md:gap-5 gap-3">
            {Links.map((link) => (
              <Link className="text-whiteGray text-sm" key={link}>
                {link}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
