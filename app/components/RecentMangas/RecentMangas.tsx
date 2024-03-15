"use client";

import fetcher from "@/app/api/fetcher";
import endpoints from "@/app/api/mangas/endpoints";
import { JikanManga } from "@/app/types/Manga/Jikan/JikanMangaTypes";
import React, { Suspense, useEffect, useState } from "react";
import useSWR from "swr";
const Card = React.lazy(() => import("../Cards/Card"));
import Typography from "../Typography/Typography";
import CardSkeleton from "../Skeletons/CardSkeleton";
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
      <div className="mt-6 flex flex-wrap gap-6">
        {isLoading &&
          datas.length === 0 &&
          new Array(5).fill(0).map((index) => <CardSkeleton key={index} />)}
        {(!isLoading || datas.length > 0) && (
          <>
            {datas.map((item, index) => (
              <Suspense fallback={<CardSkeleton />}>
                <Card item={item} key={index} />
              </Suspense>
            ))}
          </>
        )}
      </div>
      <div className="mt-4">
        {isLoading && <Loading />}
        {hasNextPage && (
          <div
            className="cursor-pointer rounded bg-secondary-400 py-2 text-center text-white/90 hover:bg-secondary-300/70 hover:text-white"
            onClick={() => setPage((prev) => prev + 1)}
          >
            {" "}
            Load More{" "}
          </div>
        )}
      </div>
    </section>
  );
}
