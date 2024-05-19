import { useSelector } from "react-redux";
import { products } from "../../../data/products";

const Total = () => {
  const { cartItem } = useSelector((store) => store.cart);
  const total = [];
  cartItem.forEach((item) =>
    total.push(
      (products.find((product) => product.id === item.id).priceCents *
        item.quantity) /
        100
    )
  );
  const sum = total.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  return (
    <>
      <div className="container pt-3 pb- flex justify-end">
        <div className="sm:w-[50%] lg:w-[35%] space-y-4">
          <div className="text-lightGray">
            For <span className="text-black font-volkhov">$10.00</span> Please
            wrap the product
          </div>
          <div className="flex items-center justify-between">
            <p>Subtotal</p>
            <p>${sum.toFixed(2)}</p>
          </div>
          <button className="bg-black text-white w-full py-2 rounded-lg shadow-lg text-sm">
            Checkout
          </button>
          <p className="text-center underline">View Cart</p>
        </div>
      </div>
    </>
  );
};

export default Total;
