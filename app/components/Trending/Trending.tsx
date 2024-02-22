import React from "react";
import Typography from "../Typography/Typography";
import CustomSlider from "../Slider/CustomSlider";
import fetcher from "@/app/apis/fetcher";
import endpoints from "@/app/apis/mangas/endpoints";


export default async function Trending() {
  const data = await fetcher("kitsu",endpoints.trendingMangas)
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
