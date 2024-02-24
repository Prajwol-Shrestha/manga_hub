"use client";

import React, { useEffect, useRef, useState } from "react";
import Button from "../Buttons/Button";
import { Manga } from "@/app/types/Manga/Kitsu/Manga";
import SingleSliderFullWidth from "./SingleSliderFullWidth";
import { JikanManga } from "@/app/types/Manga/Jikan/JikanMangaTypes";



export default function CustomSliderFullWidth({
  items,
}: {
  items: JikanManga[];
}) {
  const [sliderIndex, setSliderIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [sliderIndex, items]);

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
        className="flex min-h-[450px] overflow-x-hidden scroll-smooth"
      >
        {items?.map((item, index) => (
          <SingleSliderFullWidth key={index} item={item} />
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
