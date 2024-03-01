"use client";

import React, { useEffect, useState } from "react";
import Typography from "../Typography/Typography";
import { JikanManga } from "@/app/types/Manga/Jikan/JikanMangaTypes";
import fetcher from "@/app/apis/fetcher";
import endpoints from "@/app/apis/mangas/endpoints";
import Top10Card from "../Cards/Top10Card";
import useSWR from "swr";

export default function Top10Section() {
  const [timeFrame, settimeFrame] = useState("Today");
  const [topmangas, setTopMangas] = useState<JikanManga[]>([]);

  const constructQueryBasedOnTimeFrame = () => {
    if (timeFrame === "Today") {
      // return { limit: "10", page: "1", type: "manga" };
      return '?limit=10&page=1'
    }
    if (timeFrame === "Weekly") {
      // return { limit: "10", page: "2", type: "manga" };
      return '?limit=10&page=2'

    }
    if (timeFrame === "Monthly") {
      // return { limit: "10", page: "3", type: "manga" };
      return '?limit=10&page=3'

    }
    // return { limit: "10", page: "1", type: "manga" };
    return '?limit=10&page=1'
  };

  // const fetchTopManga = async () => {
  //   try {
  //     //   const promises = [
  //     //     fetcher('jikan', endpoints.topManga, { "limit": "10", "type": "manga" }),
  //     //     fetcher('jikan', endpoints.topManga, { "limit": "10", "type": "manhwa" }),
  //     //     fetcher('jikan', endpoints.topManga, { "limit": "10", "type": "manhua" })
  //     //   ];

  //     //   const [mangas, manhwas, manhuas] = await Promise.all(promises);
  //     //   const datas = [...mangas.data, ...manhwas.data, ...manhuas.data]
  //     let query = constructQueryBasedOnTimeFrame();

  //     const data = await fetcher(endpoints.topManga, query);
  //     const datas = data.data;
  //     setTopMangas(datas);
  //   } catch (error) {
  //     console.error("Error fetching top manga:", error);
  //   }
  // };

  const url = endpoints.topManga + constructQueryBasedOnTimeFrame();

  const { data, isLoading, error } = useSWR(url, fetcher);

  useEffect(() => {
    // fetchTopManga();
    if (!error && !isLoading) {
      // setTopMangas((prev) => [...prev, ...data.data]);
      setTopMangas((prev) =>[...data.data]);
    }
  }, [timeFrame, data]);

  return (
    <div>
      <div className="mt-8 flex items-center justify-between">
        <Typography variant={"h5"} className="text-primary">
          {" "}
          Top 10{" "}
        </Typography>
        <div className="flex rounded-lg bg-secondary-400">
          <div
            className={`cursor-pointer rounded-bl-lg rounded-tl-lg  px-3 py-2 text-sm text-secondary ${timeFrame === "Today" ? "bg-primary" : "text-white"}`}
            onClick={() => settimeFrame("Today")}
          >
            Today
          </div>
          <div
            className={`cursor-pointer px-3 py-2 text-sm ${timeFrame === "Weekly" ? "bg-primary text-secondary" : "text-white"}`}
            onClick={() => settimeFrame("Weekly")}
          >
            Weekly
          </div>
          <div
            className={`cursor-pointer rounded-br-lg rounded-tr-lg px-3 py-2 text-sm ${timeFrame === "Monthly" ? "bg-primary text-secondary" : "text-white"}`}
            onClick={() => settimeFrame("Monthly")}
          >
            Monthly
          </div>
        </div>
      </div>
      <div className="mt-6  rounded-sm bg-secondary-400 px-4 py-6">
        {isLoading ? <> Loadung.. </> : topmangas.map((item, index) => (
          <Top10Card item={item} index={index} key={item.mal_id} />
        ))}
      </div>
    </div>
  );
}
