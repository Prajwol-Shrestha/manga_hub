import React from "react";
import Typography from "../Typography/Typography";
import { MangaGenres } from "@/app/types/Manga/Jikan/JikanMangaTypes";
import Link from "next/link";

export default function GenreTag({item}: {item: MangaGenres}) {
    const { count, name, mal_id } = item
  return (
    <div className="px-5 py-2 rounded-md bg-secondary lg:bg-transparent">
      <Link href={`/search/genre?id=${mal_id}&name=${name}`}>
        <Typography
          variant={"caption"}
          className="text-xs text-white  capitalize line-clamp-1"
        >
          {" "}
          {name}
        </Typography>
      </Link>
    </div>
  );
}
