import React from "react";
import Typography from "../components/Typography/Typography";
import fetcher from "../apis/fetcher";
import endpoints from "../apis/mangas/endpoints";
import { Review } from "../types/Manga/Jikan/JikanMangaTypes";
import ReviewCard from "./ReviewCard";

export default async function page() {
  const data = await fetcher(endpoints.mangaReviews, {
    preliminary: "true",
    spoiler: "true",
  });
  const datas = data.data as Review[];

  return (
    <main className="container my-10">
      <Typography variant={"h3"} className="text-center text-primary">
        Manga Reviews
      </Typography>
      <section className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
        {datas.map((data, index) => (
          <ReviewCard review={data} key={index} />
        ))}
      </section>
    </main>
  );
}
