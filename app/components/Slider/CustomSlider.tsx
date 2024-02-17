"use client";

import React, { useEffect, useRef, useState } from "react";
import Button from "../Buttons/Button";
import Image from "next/image";
import IconButton from "../Buttons/IconButton";
import Typography from "../Typography/Typography";

export default function CustomSlider({
  items,
}: {
  items: { title: string; image: string }[];
}) {
  const [sliderIndex, setSliderIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       handleNext();
  //     }, 3000);

  //     return () => clearInterval(interval);
  //   }, [sliderIndex, items]);

  function handleNext() {
    if (containerRef.current) {
      const width = containerRef.current.clientWidth;
      const currentIndex = sliderIndex;
      const newIndex = (currentIndex + 1) % items.length;
      const scrollPosition = newIndex * width;
      containerRef.current.scrollLeft = scrollPosition;
      setSliderIndex(newIndex);
    }
  }

  function handlePrev() {
    if (containerRef.current) {
      const width = containerRef.current.clientWidth;
      const currentIndex = sliderIndex;
      const newIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
      const scrollPosition = newIndex * width;
      containerRef.current.scrollLeft = scrollPosition;
      setSliderIndex(newIndex);
    }
  }

  return (
    <div className="relative flex flex-row">
      <div ref={containerRef} className="flex overflow-x-hidden scroll-smooth ">
        {items.map((each, index) => (
          <div className=" min-w-full sm:min-w-[300px] h-[280px] sm:flex px-2 gap-2">
            <div className="sm:hidden bg-secondary-600 h-10 w-14 absolute flex items-center justify-center">
              <Typography variant={"h6"} className="text-primary">
                {" "}
                0{index + 1}{" "}
              </Typography>
            </div>
            <div className="hidden sm:flex sm:justify-end sm:items-center sm:flex-col sm: gap-4">
              <Typography
                className="text-white line-clamp-1 font-semibold sm:rotate-180"
                style={{
                  textOrientation: "sideways",
                  writingMode: "vertical-rl",
                }}
              >
                {" "}
                {each.title}{" "}
              </Typography>
              <Typography variant={"h6"} className="text-primary">
                {" "}
                0{index + 1}{" "}
              </Typography>
            </div>
            <Image
              src={each.image}
              width={300}
              height={200}
              alt={each.title}
              className="w-full sm:w-[80%]"
            />
          </div>
        ))}
      </div>
      <div className="sm:right-0 hidden sm:flex sm:flex-col sm:gap-2">
        <IconButton
          intent={"primary"}
          icon={"material-symbols:keyboard-arrow-right"}
          onClick={() => handleNext()}
          iconPlacement="left"
          additionalClassNames="flex-1 bg-slate-200/50 px-2"
        />
        <IconButton
          intent={"primary"}
          className=""
          icon={"material-symbols:keyboard-arrow-left"}
          onClick={() => handlePrev()}
          iconPlacement="left"
          additionalClassNames="flex-1 bg-slate-200/50 px-2"
        />
      </div>
    </div>
  );
}
