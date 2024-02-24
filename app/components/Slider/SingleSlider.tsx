import React from "react";
import Typography from "../Typography/Typography";
import { Manga } from "@/app/types/Manga/Kitsu/Manga";
import Image from "next/image";
import { JikanManga } from "@/app/types/Manga/Jikan/JikanMangaTypes";

export default function SingleSlider({
  item,
  index,
}: {
  item: JikanManga;
  index: number;
}) {
  const { title, images } = item ?? {};

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
          {title}
        </Typography>
        <Typography variant={"h6"} className="text-primary">
          {" "}
          0{index + 1}{" "}
        </Typography>
      </div>
      <Image
        src={images.webp.image_url}
        width={300}
        height={200}
        alt={title}
        className="w-full sm:w-[80%]"
      />
    </div>
  );
}
