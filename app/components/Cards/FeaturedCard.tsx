"use client";
import Image from "next/image";
import React from "react";
import Typography from "../Typography/Typography";
import PGRatingCard from "../PGRatingCard/PGRatingCard";
import { JikanManga } from "@/app/types/Manga/Jikan/JikanMangaTypes";

export default function FeaturedCard({ item }: { item: JikanManga }) {
  const { title, images, score } = item ?? {};

  return (
    <div className="flex items-center gap-4">
      <div className="h-[150px] rounded-lg">
        <Image
          src={images?.webp?.image_url}
          width={130}
          height={150}
          alt={title}
          className="h-full rounded-lg object-cover"
        />
      </div>
      <div className="w-[60%]">
        <Typography
          variant={"body2"}
          className="line-clamp-2  font-bold text-white"
        >
          {title}
        </Typography>
        <div className="mt-3 flex items-center gap-2">
          <PGRatingCard averageRating={score} ageRating={score}/>
          <Typography variant={"body2"} className="ml-3 text-secondary-300">
            {" "}
            . TV
          </Typography>
        </div>
      </div>
    </div>
  );
}
