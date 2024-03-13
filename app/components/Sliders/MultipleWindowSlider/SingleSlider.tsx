import React from "react";
import Typography from "../../Typography/Typography";
import Image from "next/image";
import { JikanManga } from "@/app/types/Manga/Jikan/JikanMangaTypes";
import Link from "next/link";

export default function SingleSlider({
  item,
  index,
}: {
  item: JikanManga;
  index: number;
}) {
  const { title, images, mal_id } = item ?? {};

  return (
    <div className="relative h-[280px] min-w-full gap-2 overflow-hidden px-2 sm:flex sm:min-w-[300px]">
      <div className="absolute flex h-10 w-14 items-center justify-center bg-secondary-600 sm:hidden">
        <Link href={`/details/${mal_id}`}>
          <Typography variant={"h6"} className="text-primary">
            {index >= 9 ? index + 1 : `0${index + 1}`}
          </Typography>
        </Link>
      </div>
      <div className="hidden gap-4 sm:flex sm:flex-col sm:items-center sm:justify-end">
        <Link href={`/details/${mal_id}`}>
          <Typography
            className="line-clamp-1 font-semibold text-white sm:rotate-180"
            style={{
              textOrientation: "sideways",
              writingMode: "vertical-rl",
            }}
          >
            {title}
          </Typography>
        </Link>
        <Typography variant={"h6"} className="text-primary">
          {" "}
          {index >= 9 ? index + 1 : `0${index + 1}`}
        </Typography>
      </div>
      <Link href={`/details/${mal_id}`} className="w-full sm:w-[80%]">
        <img
          src={images.webp.image_url}
          loading="lazy"
          alt={title}
          className="w-full"
        />
      </Link>
    </div>
  );
}
