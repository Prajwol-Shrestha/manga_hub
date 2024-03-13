"use client";

import fetcher from "@/app/api/fetcher";
import endpoints from "@/app/api/mangas/endpoints";
import { JikanManga } from "@/app/types/Manga/Jikan/JikanMangaTypes";
import React, { useEffect, useState } from "react";
import Typography from "../components/Typography/Typography";
import useSWR from "swr";
import Loading from "../components/Loading/Loading";
import Card from "../components/Cards/Card";
import InputWithIcon from "../components/InputWithIcon/InputWithIcon";
import useDebounce from "@/app/hooks/useDebounce";
import { useRouter } from "next/navigation";

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

export default function Page() {
  const [datas, setDatas] = useState<JikanManga[]>([]);
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();

  const debouncedSearch = useDebounce(searchValue, 2000);
  const endpoint =
    endpoints.mangaList + `?q=${debouncedSearch}&page=${page}&sfw=true`;

  const {
    isLoading,
    error,
    data: dataFromAPI,
  } = useSWR(debouncedSearch ? endpoint : null, fetcher);
  
  const { pagination }: { pagination?: PaginationInterface } =
    dataFromAPI ?? {};

  useEffect(() => {
    if (debouncedSearch === '') {
      setDatas([]);
      router.replace(`/search`, undefined)
      return;
    }
    if (debouncedSearch) {
      router.replace(`?query=${searchValue}`);
    }
  }, [debouncedSearch]);

  useEffect(() => {
    if (!isLoading && !error && dataFromAPI?.data) {
      setDatas((prev) => [...prev, ...dataFromAPI.data]);
    }
  }, [dataFromAPI, page]);

  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!searchValue) {
      return;
    }
    router.push(`/search?query=${searchValue}`);
  }

  return (
    <main className="container">
      <div className="my-8 flex flex-col gap-4">
        <form onSubmit={handleSearch}>
          <InputWithIcon
            type="text"
            icon="icons8:search"
            placeholder="Search..."
            value={searchValue}
            setSearchValue={setSearchValue}
            handleSearch={handleSearch}
            additonalClass="py-1 sm:py-2"
          />
        </form>
        {debouncedSearch !== "" && (
          <Typography variant={"h4"} className="text-white">
            {" "}
            ({pagination?.items.total}) Search Results{" "}
          </Typography>
        )}
      </div>
      <section className="my-6">
        {debouncedSearch === "" && (
          <Typography variant={"body1"} className="text-white/90 text-center">
            {" "}
            Search Mangas{" "}
          </Typography>
        )}
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
