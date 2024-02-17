import React from "react";
import CustomSliderFullWidth from "../Slider/CustomSliderFullWidth";

const sliderItems = [
  {
    title: "Konosuba",
    image: "/assets/estate.png",
  },
  {
    title: "The Greatest Estate Developer",
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

export default function Hero() {
  return (
    <div className="sm:container">
      <CustomSliderFullWidth items={sliderItems} />
      {/* <div className="relative inline-block" >
          <Image src={image} width={600} height={500} alt="image" />
          <div className="absolute inset-0">
            <div className="absolute  bg-gradient-to-t from-transparent to-secondary top-0 w-full h-16"></div>
            <div className="absolute bg-gradient-to-b from-transparent to-secondary bottom-0 w-full h-full"></div>
            <div className="absolute bg-gradient-to-r from-transparent to-secondary right-0 w-full h-full"></div>
            <div className="absolute bg-gradient-to-l from-transparent to-secondary left-0 w-16 h-full"></div>
          </div>
        </div> */}
    </div>
  );
}
