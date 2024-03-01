"use client";

import React, { useEffect, useState } from "react";
import useSWR from "swr";
import endpoints from "../apis/mangas/endpoints";
import fetcher from "../apis/fetcher";
import {
  JikanManga,
  MangaRecommendedByUser,
} from "../types/Manga/Jikan/JikanMangaTypes";
import Typography from "../components/Typography/Typography";
import Loading from "../components/Loading/Loading";
import Card from "../components/Cards/Card";

export default function page() {
  const [page, setPage] = useState(1);
  const [datas, setDatas] = useState<JikanManga[]>([]);

  const endpoint = endpoints.recommendedMangas + `?page=${page}`;

  const { isLoading, error, data } = useSWR(endpoint, fetcher);

  const { pagination } = data ?? {};
  const { has_next_page } = pagination ?? {};

  useEffect(() => {
    if (!isLoading && !error) {
      const recommendationByUsers = data.data
        .map((recommendation: MangaRecommendedByUser) => recommendation.entry)
        .flat();
      setDatas((prev) => [...prev, ...recommendationByUsers]);
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
          {/* {has_next_page && (
            <div
              className="mt-4 cursor-pointer rounded bg-secondary-400 py-2 text-center text-white/90 hover:bg-secondary-300/70 hover:text-white"
              onClick={() => setPage((prev) => prev + 1)}
            >
              {" "}
              Load More{" "}
            </div>
          )} */}
        </>
      )}
    </section>
  );
}
