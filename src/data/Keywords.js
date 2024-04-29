import { products } from "./products";

const keywords = [];
products.forEach((product) =>
  product.keywords.forEach((keyword) => {
    if (!keywords.includes(keyword)) keywords.push(keyword);
  })
);

export default keywords.sort();
