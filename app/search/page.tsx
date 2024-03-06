"use client";

import fetcher from "@/app/api/fetcher";
import endpoints from "@/app/api/mangas/endpoints";
import { JikanManga } from "@/app/types/Manga/Jikan/JikanMangaTypes";
import React, { useEffect, useState } from "react";
import Typography from "../components/Typography/Typography";
import useSWR from "swr";
import Loading from "../components/Loading/Loading";
import Card from "../components/Cards/Card";

interface PaginationInterface {
  page: number;
  has_next_page: boolean;
  current_page: number;
  items: {
    count: number;
    total: number;
    per_page: number;
  };
}

export default function page(params: { searchParams: { query: string } }) {
  const { searchParams } = params ?? {};
  const { query } = searchParams;
  const [datas, setDatas] = useState<JikanManga[]>([]);
  const [page, setPage] = useState(1);
  const endpoint = endpoints.mangaList + `?q=${query}&page=${page}&sfw=true`;

  const { isLoading, error, data: dataFromAPI } = useSWR(endpoint, fetcher);
  const { pagination }: { pagination?: PaginationInterface } =
    dataFromAPI ?? {};

  useEffect(() => {
    if (query) {
      setDatas([]);
    }
  }, [query]);

  useEffect(() => {
    if (!isLoading && !error) {
      setDatas((prev) => [...prev, ...dataFromAPI.data]);
    }
  }, [dataFromAPI, page]);

  return (
    <main className="container">
      <div className="my-8 flex flex-col gap-4">
        <Typography variant={"h4"} className="text-white">
          Search Query: {query}
        </Typography>
        <Typography variant={"h4"} className="text-white">
          {" "}
          ({pagination?.items.total}) Search Results{" "}
        </Typography>
      </div>
      <section className="my-6">
        {isLoading && datas.length === 0 && <Loading />}
        {(!isLoading || datas.length > 0) && (
          <>
            <div className="mt-6 flex flex-wrap gap-6">
              {datas.map((item, index) => (
                <Card item={item} key={index} />
              ))}
            </div>
            {isLoading && <Loading />}
            {pagination?.has_next_page && (
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
    </main>
  );
}
