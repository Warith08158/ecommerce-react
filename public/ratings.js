import rating0 from "./rating-0.png";
import rating05 from "./rating-05.png";
import rating10 from "./rating-10.png";
import rating15 from "./rating-15.png";
import rating20 from "./rating-20.png";
import rating25 from "./rating-25.png";
import rating30 from "./rating-30.png";
import rating35 from "./rating-35.png";
import rating40 from "./rating-40.png";
import rating45 from "./rating-45.png";
import rating50 from "./rating-50.png";

const ratings = [
  rating0,
  rating05,
  rating10,
  rating15,
  rating20,
  rating25,
  rating30,
  rating35,
  rating40,
  rating45,
  rating50,
];

export const rating = (rating) => {
  const number = parseInt(rating);
  const rate = number * 10;
  let matchRating;
  ratings.forEach((eachRating) => {
    const getRating = eachRating
      .replace("/public/rating-", "")
      .replace(".png", "");
    if (rate.toString() === getRating) {
      matchRating = eachRating.replace("/public", "");
    }
  });
  return matchRating;
};
