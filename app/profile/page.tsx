"use client";
import React, { useEffect, useState } from "react";
import Typography from "../components/Typography/Typography";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import useSWR from "swr";
import { JikanManga } from "../types/Manga/Jikan/JikanMangaTypes";
import Card from "../components/Cards/Card";
import { AnotherFetcher } from "../api/fetcher";
import Loading from "../components/Loading/Loading";


export default function Page() {
  const { data: sessiondata, status } = useSession();
  const [bookmarksData, setBookmarksData] = useState<JikanManga[]>([]);

  if (status === "unauthenticated") {
    redirect("/");
  }

  const userId = sessiondata?.user?.uid

  const {
    data: apiData,
    isLoading,
    error,
    mutate,
  } = useSWR(`/api/bookmarks?userId=${userId}`, AnotherFetcher);

  useEffect(() => {
    if (!isLoading && !error) {
      setBookmarksData(apiData?.bookmarks);
    }
  }, [apiData]);

  return (
    <main className="container flex flex-col  items-center">
      <Typography
        variant={"h4"}
        className="my-10 text-center capitalize text-primary"
      >
        {" "}
        {sessiondata?.user?.name + `'s`} Profile{" "}
      </Typography>
      <Typography variant={"h5"} className="my-3 text-center text-white">
        Bookmarks
      </Typography>
      <section className="my-6 flex flex-wrap gap-4">
        {isLoading && <Loading />}
        {!isLoading && bookmarksData.length === 0 && <> No data </>}
        {bookmarksData?.map((data) => <Card item={data} key={data.mal_id} />)}
      </section>
    </main>
  );
}
