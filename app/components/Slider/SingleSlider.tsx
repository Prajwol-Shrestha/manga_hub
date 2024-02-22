import React from "react";
import Typography from "../Typography/Typography";
import { Manga } from "@/app/types/Manga/Kitsu/Manga";
import Image from "next/image";

export default function SingleSlider({
  item,
  index,
}: {
  item: Manga;
  index: number;
}) {
  const { attributes } = item ?? {};
  const { titles, posterImage, canonicalTitle } = attributes;
  return (
    <div className="relative h-[280px] min-w-full gap-2 overflow-hidden px-2 sm:flex sm:min-w-[300px]">
      <div className="absolute flex h-10 w-14 items-center justify-center bg-secondary-600 sm:hidden">
        <Typography variant={"h6"} className="text-primary">
          {" "}
          0{1}{" "}
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
          {titles?.en_jp ?? titles?.en_us ?? titles?.zh_cn ?? titles?.en}{" "}
        </Typography>
        <Typography variant={"h6"} className="text-primary">
          {" "}
          0{index + 1}{" "}
        </Typography>
      </div>
      <Image
        src={posterImage.medium}
        width={300}
        height={200}
        alt={canonicalTitle}
        className="w-full sm:w-[80%]"
      />
    </div>
  );
}
