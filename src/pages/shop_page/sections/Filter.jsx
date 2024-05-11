import React from "react";
import Sidebar from "../utils/Sidebar";
import { Link } from "react-router-dom";
import { ratings } from "../../../data/ratings";
import { useSelector } from "react-redux";
import {
  Footer,
  NewsLetter,
  PinkyBinder,
} from "../../../components/components";
import GalleryImages from "../../../components/GalleryImages";

const Filter = () => {
  const products = useSelector((store) => store.shopping.dataCopy);
  return (
    <section>
      <div className="md:flex md:container">
        <div className="sticky top-0 md:hidden bg-white shadow-sm">
          <div className="container">
            <Sidebar />
          </div>
        </div>
        <div className="hidden md:block">
          <Sidebar />
        </div>
        {products.length === 0 ? (
          <div className="w-full">
            <h1 className="text-center">Filter Not found</h1>
          </div>
        ) : (
          <div className="grid md:pl-20 lg:pl-32 container grid-cols-1 xxs:grid-cols-2 items-end lg:grid-cols-3 gap-8 w-full">
            {products.map((product) => (
              <div key={product.id}>
                <Link
                  to={`shopping/product/${product.id}`}
                  className="flex justify-center rounded-md shadow-md cursor-pointer"
                >
                  <div className="flex p-4 sm:w-48 flex-col gap-3">
                    <div className="flex justify-center max-h-44 max-w-44">
                      <img
                        src={`/${product.image}`}
                        alt={product.name}
                        className="object-contain w-full h-full"
                      />
                    </div>

                    <div className="flex flex-col items-start gap-2 mt-4">
                      <p className="text-xs max-w-[250px]">{product.name}</p>
                      <img
                        src={`/${
                          ratings.find(
                            (rating) => product.rating.stars === rating.rating
                          ).image
                        }`}
                        alt="rating"
                        className="h-4 object-contain"
                      />
                    </div>

                    <p className="text-xs text-lightGray mt-1">
                      ({product.rating.count}) reviews
                    </p>
                    <div className="mt-1 flex items-center justify-between">
                      <p className="text-base text-lightGray oldstyle-nums">
                        ${Math.floor(product.priceCents / 100)}
                      </p>
                      <p className="text-sm text-lightGrayWhite line-through">
                        ${Math.floor((product.priceCents / 100) * 2)}
                      </p>
                    </div>
                    <button className="bg-orange-500 text-white rounded-md py-1 mt-2">
                      Add to Cart
                    </button>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="mt-10">
        <PinkyBinder />
        <GalleryImages />
        <NewsLetter />
        <Footer />
      </div>
    </section>
  );
};

export default Filter;
