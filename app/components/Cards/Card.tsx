import Image from "next/image";
import React from "react";
import Typography from "../Typography/Typography";
import Dot from "../Dot/Dot";
import { JikanManga } from "@/app/types/Manga/Jikan/JikanMangaTypes";
import PGRatingCard from "../PGRatingCard/PGRatingCard";

export default function Card({ item }: { item: JikanManga }) {
  const { title, images, status, rank, score } = item ?? {};
  return (
    <div className="min-w-[200px] flex-1 bg-secondary-400 sm:max-w-[250px]">
      <div className="relative h-[200px]">
        <Image
          src={images.webp.image_url ?? images.jpg.image_url}
          width={200}
          height={400}
          alt="test"
          className="h-full w-full object-cover"
        />
        <div className="absolute bottom-0 h-full w-full bg-gradient-to-b from-transparent to-secondary-400"></div>
        <div className="absolute bottom-[-.5rem] left-2">
          <PGRatingCard averageRating={score} />
        </div>
      </div>
      <div className="px-2 py-4">
        <Typography variant={"body2"} className="line-clamp-1 text-white">
          {" "}
          {title}
        </Typography>
        <div className="mt-1 flex items-center gap-3">
          <Typography variant={"caption"} className="text-secondary-300">
            {" "}
            Status {status}
          </Typography>
          <Dot />
          <Typography variant={"caption"} className="text-secondary-300">
            {" "}
            Rank {rank}
          </Typography>
        </div>
      </div>
    </div>
  );
}
