import Image from "next/image";
import React from "react";
import Typography from "../Typography/Typography";
import Dot from "../Dot/Dot";
import {
  JikanManga,
  RecommendedMangaType,
} from "@/app/types/Manga/Jikan/JikanMangaTypes";
import PGRatingCard from "../PGRatingCard/PGRatingCard";
import Link from "next/link";

export default function Card({
  item,
  votes,
}: {
  item: JikanManga;
  votes?: number;
}) {
  const { title, images, status, rank, score, mal_id } =
    (item as JikanManga) ?? {};

  return (
    <div className="min-w-[250px] flex-1 bg-secondary-400 sm:max-w-[300px]">
      <div className="relative h-[200px]">
        <Image
          src={images.webp.image_url ?? images.jpg.image_url}
          width={200}
          height={400}
          alt="test"
          className="h-full w-full object-cover"
        />
        <div className="absolute bottom-0 h-full w-full bg-gradient-to-b from-transparent to-secondary-400"></div>
        {score && (
          <div className="absolute bottom-[-.5rem] left-2">
            <PGRatingCard averageRating={score} />
          </div>
        )}
      </div>
      <div className="px-2 py-4">
        <Link href={`/details/${mal_id}`}>
          <Typography variant={"body2"} className="line-clamp-1 text-white">
            {" "}
            {title}
          </Typography>
        </Link>
        {(status || votes) && (
          <div className="mt-1 flex items-center gap-3">
            {status && (
              <Typography variant={"caption"} className="text-secondary-300">
                {" "}
                Status {status}
              </Typography>
            )}
            {votes && (
              <Typography variant={"caption"} className="text-secondary-300">
                {" "}
                Votes {votes}
              </Typography>
            )}
            {/* <Dot />
            <Typography variant={"caption"} className="text-secondary-300">
              {" "}
              Rank {rank}
            </Typography> */}
          </div>
        )}
      </div>
    </div>
  );
}
