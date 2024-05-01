import React from "react";
import { Button } from "./components";
import { Link } from "react-router-dom";

const PinkyBinder = () => {
  return (
    <section className="py-20 bg-pinkyBinder md:bg-pinkyBinders-bg max-w-[1700px] mx-auto bg-cover bg-center">
      <div className="container flex justify-start md:justify-end">
        <div className="flex flex-col items-start gap-3">
          <h2 className="text-lightGray text-base font-light">
            Women Collection
          </h2>
          <h1 className="font-volkhov text-lightGray font-medium text-2xl lg:text-3xl">
            Peaky Blinders
          </h1>
          <h2 className="underline text-black text-base">Description</h2>
          <p className="max-w-[500px] md:max-w-[300px] lg:max-w-[400px] xl:max-w-[500px] text-sm text-lightGray font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, qui
            iure mollitia quia expedita voluptas, nam delectus fugit obcaecati
            accusamus, laboriosam neque? Tempora eligendi neque adipisci velit
            quos esse sapiente.
          </p>
          <div className="flex flex-col justify-end gap-4">
            <div className="flex items-center gap-4">
              <p className="text-sm text-lightGray font-light">Size</p>
              <p className="bg-black px-4 py-1 rounded-md text-white">M</p>
            </div>
            <p className="text-black text-xl font-medium">$100.00</p>
            <Link to="/shopping/shop">
              <Button text={"Buy Now"} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PinkyBinder;
