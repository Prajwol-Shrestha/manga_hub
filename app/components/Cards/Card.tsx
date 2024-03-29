import React from "react";
import Typography from "../Typography/Typography";
import { JikanManga } from "@/app/types/Manga/Jikan/JikanMangaTypes";
import PGRatingCard from "../PGRatingCard/PGRatingCard";
import Link from "next/link";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface CardProps extends JikanManga {
  image?: string | StaticImport;
}

export default function Card({
  item,
  votes,
}: {
  item: CardProps;
  votes?: number;
}) {
  const { title, images, image, status, rank, score, mal_id } =
    (item as CardProps) ?? {};

  return (
    <div className="min-w-[250px] flex-1 bg-secondary-400 sm:max-w-[300px]">
      <Link href={`/details/${mal_id}`}>
        <div className="relative h-[200px]">
          <img
            src={String(image ?? images.webp.image_url ?? images.jpg.image_url)}
            alt="test"
            className="h-full w-full object-cover"
            loading="lazy"
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
      </Link>
    </div>
  );
}
