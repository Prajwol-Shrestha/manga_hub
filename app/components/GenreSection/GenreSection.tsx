"use client";

import React, { useEffect, useState } from "react";
import Button from "../Buttons/Button";
import fetcher from "@/app/api/fetcher";
import endpoints from "@/app/api/mangas/endpoints";
import GenreTag from "../Cards/GenreTag";
import { MangaGenres } from "@/app/types/Manga/Jikan/JikanMangaTypes";
import Typography from "../Typography/Typography";
import Loading from "../Loading/Loading";
import GenreTagSkeleton from "../Skeletons/GenreTagSkeleton";

export default function GenreSection() {
  const [genres, setGenres] = useState<MangaGenres[]>([]);
  const [showMore, setShowMore] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const data = await fetcher(endpoints.mangaGenres);
    const datas = data.data as MangaGenres[];
    setGenres(datas);
    setIsLoading(false);
  };

  // timeout because only 3 api calls per/second is allowed
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
          {isLoading
            ? new Array(12)
                .fill(0)
                .map((item, index) => <GenreTagSkeleton key={index} />)
            : (showMore ? genres : genres.slice(0, 20)).map((item, index) => (
                <GenreTag key={index} item={item} />
              ))}
        </div>

        <Button
          intent={"primary"}
          className="w-full bg-secondary-300/80"
          onClick={() => setShowMore((prev) => !prev)}
        >
          {" "}
          {isLoading ? <Loading /> : `Show ${showMore ? "Less" : "More"}`}
        </Button>
      </div>
    </>
  );
}
