import React from "react";
import Typography from "../Typography/Typography";
import fetcher from "@/app/api/fetcher";
import endpoints from "@/app/api/mangas/endpoints";
import {
  RecommendedMangaType,
} from "@/app/types/Manga/Jikan/JikanMangaTypes";
import Card from "../Cards/Card";

export default async function RecommendedMangas({ id }: { id: string }) {
  const endpoint = endpoints.relatedRecommendedMangas.replace("{id}", id);
  const data = await fetcher(endpoint);
  const datas = (data.data.slice(0, 21) as RecommendedMangaType[]) || [];

  return (
    <section>
      <Typography variant={"h5"} className="text-primary">
        {" "}
        Recommended Mangas{" "}
      </Typography>
      {/* {isLoading && datas.length === 0 && <Loading />} */}
      {datas.length > 0 && (
        <>
          <div className="mt-6 flex flex-wrap gap-6">
            {datas.map((item, index) => (
              <Card item={item.entry} key={index} votes={item.votes} />
            ))}
          </div>
        </>
      )}
      {datas.length === 0 && (
        <Typography variant={"body1"} className="text-white/50 mt-6">
          {" "}
          No Related Recommendations. 
        </Typography>
      )}
    </section>
  );
}
