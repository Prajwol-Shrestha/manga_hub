import React from "react";
import Typography from "../Typography/Typography";
import Divider from "../Divider/Divider";
import fetcher from "@/app/api/fetcher";
import endpoints from "@/app/api/mangas/endpoints";
import FeaturedCard from "../Cards/FeaturedCard";
import { JikanManga } from "@/app/types/Manga/Jikan/JikanMangaTypes";

async function UpcomingSection() {
  const data = await fetcher(endpoints.mangaList, {
    status: "upcoming",
    sfw: "true",
    order_by: "score",
    limit: "4",
  });
  const datas = data.data as JikanManga[];
  return (
    <div>
      <Typography variant={"h6"} className="text-primary">
        {" "}
        Upcoming{" "}
      </Typography>
      <div className="mt-4 flex flex-col gap-4">
        {datas.map((item, index) => (
          <div key={index}>
            <FeaturedCard item={item} />
            <Divider />
            {index === 3 && (
              <Typography variant={"body1"} className="text-white">
                {" "}
                View More{" "}
              </Typography>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

async function OngoingSection() {
  const data = await fetcher(endpoints.mangaList, {
    status: "publishing",
    sfw: "true",
    order_by: "score",
    limit: "4",
  });
  const datas = data.data as JikanManga[];
  return (
    <div>
      <Typography variant={"h6"} className="text-primary">
        {" "}
        On Going{" "}
      </Typography>
      <div className="mt-4 flex flex-col gap-4">
        {datas.map((item, index) => (
          <div key={index}>
            <FeaturedCard item={item} />
            <Divider />
            {index === 3 && (
              <Typography variant={"body1"} className="text-white">
                {" "}
                View More{" "}
              </Typography>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

async function CompletedSection() {
  const data = await fetcher(endpoints.mangaList, {
    status: "complete",
    sfw: "true",
    order_by: "score",
    limit: "4",
  });
  const datas = data.data as JikanManga[];
  return (
    <div>
      <Typography variant={"h6"} className="text-primary">
        {" "}
        Completed{" "}
      </Typography>
      <div className="mt-4 flex flex-col gap-4">
        {datas.map((item, index) => (
          <div key={index}>
            <FeaturedCard item={item} />
            <Divider />
            {index === 3 && (
              <Typography variant={"body1"} className="text-white">
                {" "}
                View More{" "}
              </Typography>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
async function ToBeAnnouncedSection() {
  const data = await fetcher(endpoints.mangaList, {
    status: "discontinued",
    sfw: "true",
    order_by: "score",
    limit: "4",
  });
  const datas = data.data as JikanManga[];
  return (
    <div>
      <Typography variant={"h6"} className="text-primary">
        {" "}
        Discontinued
      </Typography>
      <div className="mt-4 flex flex-col gap-4">
        {datas.map((item, index) => (
          <div key={index}>
            <FeaturedCard item={item} />
            <Divider />
            {index === 3 && (
              <Typography variant={"body1"} className="text-white">
                {" "}
                View More{" "}
              </Typography>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Featured() {
  return (
    <section className="container py-12">
      <div className="grid-columns grid justify-between gap-x-8 gap-y-12">
        <UpcomingSection />
        <OngoingSection />
        <CompletedSection />
        <ToBeAnnouncedSection />
      </div>
    </section>
  );
}
