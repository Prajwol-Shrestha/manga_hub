import React from "react";
import Typography from "../Typography/Typography";
import CustomSlider from "../Slider/CustomSlider";

const sliderItems = [
  {
    title: "Konosuba",
    image: "/assets/estate.png",
  },
  {
    title: "The Greatest Estate Developer Developer",
    image: "/assets/estate.png",
  },
  {
    title: "Slide three",
    image: "/assets/estate.png",
  },
  {
    title: "Slide four",
    image: "/assets/estate.png",
  },
];

export default function Trending() {
  return (
    <section className="container py-12">
      <Typography variant={"h5"} className="text-primary">
        {" "}
        Trending{" "}
      </Typography>
      <div className="mt-4">
        <CustomSlider items={sliderItems} />
      </div>
    </section>
  );
}
