"use client";
import { Manga } from "@/app/types/Manga/Kitsu/Manga";
import Image from "next/image";
import React from "react";
import Typography from "../Typography/Typography";
import { Icon } from "@iconify/react";
import PGRatingCard from "../PGRatingCard/PGRatingCard";

export default function FeaturedCard({ item }: { item: Manga }) {
  const { attributes } = item ?? {};
  const { posterImage, titles, ageRating, averageRating } = attributes ?? {};
  return (
    <div className="flex items-center gap-4">
      <div className="h-[150px] rounded-lg">
        <Image
          src={posterImage.medium}
          width={130}
          height={150}
          alt="estate"
          className="h-full rounded-lg object-cover"
        />
      </div>
      <div className="w-[60%]">
        <Typography
          variant={"body2"}
          className="line-clamp-2  font-bold text-white"
        >
          {titles.en_jp ?? titles.en_us ?? titles.zh_cn ?? titles.en}
        </Typography>
        <div className="mt-3 flex items-center gap-2">
          <PGRatingCard averageRating={averageRating} ageRating={ageRating}/>
          <Typography variant={"body2"} className="ml-3 text-secondary-300">
            {" "}
            . TV
          </Typography>
        </div>
      </div>
    </div>
  );
}
