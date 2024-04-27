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
      <div className="container mx-auto flex overflow-x-auto items-center justify-center gap-10 md:overflow-x-auto md:over">
        {products.map((product) => (
          <img
            src={product.logo}
            alt={product.name}
            className="object-contain w-28"
          />
        ))}
      </div>
    </section>
  );
};

export default AvailableProducts;
