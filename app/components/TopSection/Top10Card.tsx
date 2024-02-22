import React from "react";
import Typography from "../Typography/Typography";
import { JikanManga } from "@/app/types/Manga/Jikan/JikanMangaTypes";
import Image from "next/image";
import Divider from "../Divider/Divider";
import { Icon } from "@iconify/react";
import PGRatingCard from "../PGRatingCard/PGRatingCard";

export default function Top10Card({
  index,
  item,
}: {
  index: number;
  item: JikanManga;
}) {
  const { images, title, score } = item ?? {};
  return (
    <div className="flex  items-center  gap-6">
      <div>
        <Typography variant={"h6"} className="text-white">
          {" "}
          {index >= 9 ? "" : 0}
          {index + 1}
        </Typography>
      </div>
      <div className="mt-4 flex flex-1 flex-col gap-4">
        <>
          <div className="flex items-center gap-4">
            <div className="h-[100px] rounded-lg">
              <Image
                src={images.webp.image_url}
                width={80}
                height={100}
                alt="estate"
                className="h-full rounded-lg object-cover"
              />
            </div>
            <div className="w-[60%]">
              <Typography
                variant={"body2"}
                className="line-clamp-2 font-bold text-white"
              >
                {title}
              </Typography>
              <div className="mt-3 flex items-center">
                <PGRatingCard averageRating={score}/>
                <Typography
                  variant={"body2"}
                  className="ml-3 text-xs text-white"
                >
                  {" "}
                  TV
                </Typography>
              </div>
            </div>
          </div>
          <Divider />
        </>
      </div>
    </div>
  );
}
