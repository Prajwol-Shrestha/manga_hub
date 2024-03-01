"use client";

import React, { useEffect, useState } from "react";
import Button from "../Buttons/Button";
import fetcher from "@/app/apis/fetcher";
import endpoints from "@/app/apis/mangas/endpoints";
import GenreTag from "../Cards/GenreTag";
import { MangaGenres } from "@/app/types/Manga/Jikan/JikanMangaTypes";
import Typography from "../Typography/Typography";

export default function GenreSection() {
  const [genres, setGenres] = useState<MangaGenres[]>([]);
  const [showMore, setShowMore] = useState(false);

  const fetchData = async () => {
    const data = await fetcher(endpoints.mangaGenres);
    const datas = data.data as MangaGenres[];
    setGenres(datas);
  };

  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 2000);
  }, []);

  return (
    <>
      <Typography variant={"h5"} className="text-primary">
        {" "}
        Genre{" "}
      </Typography>
      <div className="mt-6 rounded-sm  bg-secondary-400 px-4 py-6">
        <div className="mb-5 flex flex-wrap gap-4 lg:grid lg:grid-cols-3">
          {(showMore ? genres : genres.slice(0, 20)).map((item, index) => (
            <GenreTag key={index} item={item} />
          ))}
        </div>
        <Button
          intent={"primary"}
          className="w-full bg-secondary-300/80"
          onClick={() => setShowMore((prev) => !prev)}
        >
          {" "}
          Show {showMore ? "Less" : "More"}{" "}
        </Button>
      </div>
    </>
  );
}
