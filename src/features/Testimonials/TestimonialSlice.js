import { createSlice } from "@reduxjs/toolkit";
import { testimonialImage1 } from "../../assets/images/images";

const testimonials = [
  {
    image: testimonialImage1,
    comment:
      "You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!",
    rating: "5",
    name: "James K.",
    occupation: "traveler",
    paragraph: "outstanding product. Absolutely wonderful!",
  },
  {
    image: testimonialImage1,
    comment:
      "Absolutely thrilled with my purchase! The product exceeded my expectations, and the delivery was lightning-fast. Will definitely be shopping here again!",
    rating: "5",
    name: "Emily J.",
    occupation: "Marketing Executive",
    paragraph: "lightning-fast. Will definitely be shopping here again!",
  },
  {
    image: testimonialImage1,
    comment:
      "I was hesitant to buy [product] online, but I'm so glad I did! It arrived quickly and in perfect condition. It's exactly what I wanted. Thank you!",
    rating: "4",
    name: "Alex R.",
    occupation: "Software Developer",
    paragraph: "It's exactly what I wanted. Thank you!",
  },
  {
    image: testimonialImage1,
    comment:
      "This is hands down the best [product] I've ever owned. It's well-made, durable, and worth every penny. Plus, the shipping was super quick. 10/10!",
    rating: "5",
    name: "Sarah Smith.",
    occupation: "Nurse",
    paragraph: "Plus, the shipping was super quick. 10/10",
  },
  {
    image: testimonialImage1,
    comment:
      "I've never been more satisfied with an online purchase. The [product] is even better in person, and it arrived sooner than expected. I'll definitely be back for more!",
    rating: "3",
    name: "David T.",
    occupation: "Financial Analyst",
    paragraph: "I'll definitely be back for more!",
  },
  {
    image: testimonialImage1,
    comment:
      "I can't say enough good things about my experience with this company. The customer service team went above and beyond to help me, and the [product] is top-notch quality. Thank you!",
    rating: "3",
    name: "Samantha L.",
    occupation: "Graphic Designer",
    paragraph: "and the [product] is top-notch quality. Thank you!",
  },
  {
    image: testimonialImage1,
    comment:
      "I've been a loyal customer for years, and this company never disappoints. The [product] I just received is another testament to their commitment to excellence. Highly recommend!",
    rating: "5",
    name: "Michael C.",
    occupation: "Architect",
    paragraph: "commitment to excellence. Highly recommend!",
  },
  {
    image: testimonialImage1,
    comment:
      "I'm blown away by the quality of my recent purchase. It's clear that this company takes pride in their products. I'll be spreading the word to all my friends!",
    rating: "5",
    name: "Jessica D.",
    occupation: "Teacher",
    paragraph: " be spreading the word to all my friends!",
  },
  {
    image: testimonialImage1,
    comment:
      "From start to finish, my shopping experience was seamless. The website was easy to navigate, the checkout process was a breeze, and my order arrived right on schedule. Impressed!",
    rating: "3",
    name: "Ryan W.",
    occupation: "Sales Manager",
    paragraph: " order arrived right on schedule. Impressed!",
  },
  {
    image: testimonialImage1,
    comment:
      "I'm so glad I stumbled upon this website. The selection of products is fantastic, the prices are competitive, and the customer service is outstanding. I'll definitely be a repeat customer!",
    rating: "4",
    name: "Ashley B.",
    occupation: "Accountant",
    paragraph: "I'll definitely be a repeat customer!",
  },
];

const initialState = {
  testimonials_: testimonials,
  card1: 0,
  card2: 1,
  card3: 2,
};

const testmonialSlice = createSlice({
  name: "testimonalslice",
  initialState,
  reducers: {
    previous: (state, { payload: current }) => {
      console.log(current);
      if (current === 0) {
        return;
      }
      state.card1 = state.card1 - 1;
      state.card2 = state.card2 - 1;
      state.card3 = state.card3 - 1;
    },
    next: (state, { payload: current }) => {
      console.log(current);
      if (current === state.testimonials_.length - 1) {
        return;
      }
      state.card1 = state.card1 + 1;
      state.card2 = state.card2 + 1;
      state.card3 = state.card3 + 1;
    },
  },
});

export default testmonialSlice.reducer;

export const { previous, next } = testmonialSlice.actions;
