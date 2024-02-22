"use client";

import React, { useEffect, useRef, useState } from "react";
import IconButton from "../Buttons/IconButton";
import { Manga } from "@/app/types/Manga/Kitsu/Manga";
import SingleSlider from "./SingleSlider";

export default function CustomSlider({
  items,
}: {
  items: Manga[];
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
        {items.map((item, index) => (
          <SingleSlider key={index} item={item} index={index}/>
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
