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
  const containerRef = useRef<HTMLDivElement>(null);

  // auto sliding not works once it reaches end
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [items]);

  function handleNext() {
    if (containerRef.current) {
      const width = containerRef.current.clientWidth;
      //   containerRef.current.scrollLeft = scrollPosition;
      containerRef.current.scrollLeft = containerRef.current.scrollLeft + width;
    }
  }

  function handlePrev() {
    if (containerRef.current) {
      const width = containerRef.current.clientWidth;
      containerRef.current.scrollLeft = containerRef.current.scrollLeft - width;
    }
  }

  return (
    <div className="relative flex flex-row">
      <div ref={containerRef} className="flex overflow-x-hidden scroll-smooth ">
        {items.map((each, index) => (
          <div
            key={index}
            className="relative h-[280px] min-w-full gap-2 px-2 sm:flex sm:min-w-[300px] overflow-hidden"
          >
            <div className="absolute flex h-10 w-14 items-center justify-center bg-secondary-600 sm:hidden">
              <Typography variant={"h6"} className="text-primary">
                {" "}
                0{index + 1}{" "}
              </Typography>
            </div>
            <div className="hidden gap-4 sm:flex sm:flex-col sm:items-center sm:justify-end">
              <Typography
                className="line-clamp-1 font-semibold text-white sm:rotate-180"
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
      <div className="hidden sm:right-0 sm:flex sm:flex-col sm:gap-2">
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
