import React from "react";
import Typography from "../Typography/Typography";
import Divider from "../Divider/Divider";
import fetcher from "@/app/apis/fetcher";
import endpoints from "@/app/apis/mangas/endpoints";
import FeaturedCard from "./FeaturedCard";
import { Manga } from "@/app/types/Manga/Kitsu/Manga";

async function UpcomingSection() {
  const data = await fetcher("kitsu",endpoints.mangaList, {
    "filter[status]": "upcoming",
    "filter[categories]": "fantasy",
    "page[limit]": "4",
  });
  const datas = data.data as Manga[];
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
  const data = await fetcher("kitsu",endpoints.mangaList, {
    "filter[status]": "current",
    "filter[categories]": "isekai",
    "page[limit]": "4",
  });
  const datas = data.data as Manga[];
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
  const data = await fetcher("kitsu",endpoints.mangaList, {
    "filter[status]": "finished",
    "filter[categories]": "fantasy",
    "page[limit]": "4",
  });
  const datas = data.data as Manga[];
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
  const data = await fetcher("kitsu",endpoints.mangaList, {
    "filter[status]": "tba",
    "filter[categories]": "isekai",
    "page[limit]": "4",
  });
  const datas = data.data as Manga[];
  return (
    <div>
      <Typography variant={"h6"} className="text-primary">
        {" "}
        To Be Announced
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
