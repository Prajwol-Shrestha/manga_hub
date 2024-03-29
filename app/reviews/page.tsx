import React from "react";
import Typography from "../components/Typography/Typography";
import fetcher from "../api/fetcher";
import endpoints from "../api/mangas/endpoints";
import { Review } from "../types/Manga/Jikan/JikanMangaTypes";
import ReviewCard from "../components/Cards/ReviewCard";

export default async function Page() {
  const data = await fetcher(endpoints.mangaReviews, {
    preliminary: "true",
    spoiler: "true",
  });
  const datas = data.data as Review[];

  return (
    <section className="container my-10">
      <Typography variant={"h3"} className="text-center text-primary">
        Manga Reviews
      </Typography>
      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
        {datas.map((data, index) => (
          <ReviewCard review={data} key={index} />
        ))}
      </div>
    </section>
  );
}
