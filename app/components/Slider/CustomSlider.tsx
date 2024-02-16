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

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     handleNext();
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, [sliderIndex, items]);

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
    <div className="relative">
      <div
        ref={containerRef}
        className="min-h-[500px] flex overflow-x-hidden scroll-smooth"
      >
        {items.map((each) => (
          <div className="min-w-[100%] relative px-2">
            <div className="absolute top-1/3 mx-6 z-10">
              <Typography variant={"caption"} className="my-4 text-primary">
                {" "}
                #10 Ranking{" "}
              </Typography>
              <Typography variant={"h4"} className="my-3 text-white">
                {" "}
                {each.title}{" "}
              </Typography>
              <Typography variant={"body2"} className="hidden sm:box my-3 text-white max-w-md line-clamp-3">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque suscipit quod dolorem, tenetur excepturi labore accusantium pariatur deserunt, non rerum ut repellendus id fuga laborum repellat, maiores eaque incidunt fugiat?
              </Typography>

              <div className="flex gap-4">
                <IconButton
                  intent={"primary"}
                  text="Watch Now"
                  icon={"material-symbols:play-circle-rounded"}
                  iconPlacement={"left"}
                  additionalClassNames="rounded-xl text-secondary-600 text-sm"
                />
                <IconButton
                  intent={"primary"}
                  text="Details"
                  icon={"iconamoon:arrow-right-2-duotone"}
                  iconPlacement={"right"}
                  additionalClassNames="rounded-xl text-secondary-600 text-sm bg-slate-200"
                />
              </div>
            </div>
            <Image
              src={each.image}
              width={800}
              height={600}
              alt={each.title}
              className="h-full max-h-[600px] object-cover ml-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 to-secondary/40"></div>
            {/* <div className="absolute inset-0 bg-gradient-to-t from-transparent to-secondary"></div> */}
            <div className="absolute inset-0 bg-gradient-to-b from-secondary to-transparent h-16"></div>
            <div className="absolute bottom-0 bg-gradient-to-t from-secondary to-transparent h-16 w-full"></div>

            {/* <div className="absolute inset-0 bg-gradient-to-b bottom-0 from-secondary to-transparent h-10"></div> */}


          </div>
        ))}

        <Button
          intent={"primary"}
          className="absolute right-0"
          onClick={() => handleNext()}
        >
          {" "}
          Next{" "}
        </Button>
        <Button className="absolute" onClick={() => handlePrev()}>
          {" "}
          Prev{" "}
        </Button>
      </div>
    </div>
  );
}
