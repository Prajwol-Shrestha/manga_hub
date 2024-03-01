"use client";

import fetcher from "@/app/apis/fetcher";
import endpoints from "@/app/apis/mangas/endpoints";
import { JikanManga } from "@/app/types/Manga/Jikan/JikanMangaTypes";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import FeaturedCard from "../Cards/FeaturedCard";
import Card from "../Cards/Card";
import Typography from "../Typography/Typography";
import Loading from "../Loading/Loading";

export default function RecentMangas() {
  const [page, setPage] = useState(1);
  const [datas, setDatas] = useState<JikanManga[]>([]);

  const url =
    endpoints.mangaList + `?page=${page}&orderBy=score&sort=desc&sfw=true`;
  const { data, error, isLoading } = useSWR(url, fetcher);
  const { pagination } = data ?? {};
  const { has_next_page: hasNextPage } = pagination ?? {};

  useEffect(() => {
    if (!error && !isLoading) {
      setDatas((prev) => [...prev, ...data.data]);
    }
  }, [data]);
  return (
    <section className="container">
      <Typography variant={"h5"} className="text-primary">
        {" "}
        Recommended Mangas{" "}
      </Typography>
      {isLoading && datas.length === 0 && <Loading />}
      {(!isLoading || datas.length > 0) && (
        <>
          <div className="mt-6 flex flex-wrap gap-6">
            {datas.map((item, index) => (
              <Card item={item} key={index} />
            ))}
          </div>
          {isLoading && <Loading />}
          {hasNextPage && (
            <div
              className="mt-4 cursor-pointer rounded bg-secondary-400 py-2 text-center text-white/90 hover:bg-secondary-300/70 hover:text-white"
              onClick={() => setPage((prev) => prev + 1)}
            >
              {" "}
              Load More{" "}
            </div>
          )}
        </>
      )}
    </section>
  );
}
