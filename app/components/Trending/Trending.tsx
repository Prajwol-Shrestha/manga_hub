import React from "react";
import Typography from "../Typography/Typography";
import CustomSlider from "../Sliders/MultipleWindowSlider/CustomSlider";
import fetcher from "@/app/api/fetcher";
import endpoints from "@/app/api/mangas/endpoints";

export default async function Trending() {
  // action, adventure, comedy,fantasy,
  const data = await fetcher(endpoints.mangaList, {
    orderBy: "rank",
    limit: "10",
    genres: "1,2,4,10",
  });
  return (
    <section className="container py-12">
      <Typography variant={"h5"} className="text-primary">
        {" "}
        Trending{" "}
      </Typography>
      <div className="mt-4">
        <CustomSlider items={data.data} />
      </div>
    </section>
  );
}
