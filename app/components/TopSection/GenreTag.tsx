import React from "react";
import Typography from "../Typography/Typography";
import { MangaGenres } from "@/app/types/Manga/Jikan/JikanMangaTypes";

export default function GenreTag({item}: {item: MangaGenres}) {
    const { count, name } = item
  return (
    <div className="px-5 py-2 rounded-md bg-secondary lg:bg-transparent">
      <Typography
        variant={"caption"}
        className="text-xs text-white  capitalize line-clamp-1"
      >
        {" "}
        {name}
      </Typography>
    </div>
  );
}
