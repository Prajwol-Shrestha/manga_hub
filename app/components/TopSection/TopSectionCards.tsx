import React from "react";
import Typography from "../Typography/Typography";
import Card from "../Cards/Card";
import fetcher from "@/app/apis/fetcher";
import endpoints from "@/app/apis/mangas/endpoints";
import { JikanManga } from "@/app/types/Manga/Jikan/JikanMangaTypes";

export default async function TopSectionCards({
  type,
  title,
}: {
  type: string;
  title: string;
}) {
  const data = await fetcher("jikan", endpoints.topManga, {
    "type": type,
    "limit": "8",
    "filter": "bypopularity",
  });
  const datas = data.data as JikanManga[]

  return (
    <div>
      <Typography variant={"h5"} className="text-primary">
        {title}
      </Typography>
      <div className="mt-6 flex flex-wrap  gap-x-4 gap-y-8">
        {datas.map((item, index) => (
          <Card key={index} item={item}/>  
        ))}
      </div>
    </div>
  );
}
