import React from "react";
import {
  chanel,
  louisVutton,
  prada,
  calveinKlein,
  denim,
} from "../../../assets/images/images";

const products = [
  { name: "CHANEL", logo: chanel },
  { name: "LOUIS_VUITION", logo: louisVutton },
  { name: "PRADA", logo: prada },
  { name: "CALVIN_CLEIN", logo: calveinKlein },
  { name: "DENIM", logo: denim },
];

const AvailableProducts = () => {
  return (
    <section className="py-8 shadow-md">
      <div className="container mx-auto flex overflow-x-hidden items-center justify-center gap-4 lg:gap-8">
        {products.map((product) => (
          <img
            key={product.name}
            src={product.logo}
            alt={product.name}
            className="object-contain w-20 lg:w-24"
          />
        ))}
      </div>
    </section>
  );
};

export default AvailableProducts;
