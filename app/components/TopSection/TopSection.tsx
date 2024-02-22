import React from "react";
import Typography from "../Typography/Typography";
import TopSectionCards from "./TopSectionCards";
import GenreSection from "./GenreSection";
import Top10Section from "./Top10Section";

export default function TopSection() {
  return (
    <section className="container flex flex-col-reverse gap-6 py-12 lg:flex-row lg:gap-12">
      <div className="flex w-full flex-col gap-12 lg:w-[75%]">
        <TopSectionCards type={"manga"} title={"Top Mangas"}/>
        <TopSectionCards type={"manhwa"} title={"Top Manhwa"}/>
        <TopSectionCards type={"manhua"} title={"Top Manhuas"}/>
      </div>
      <div className="w-full lg:w-[25%]">
        <div>
          <Typography variant={"h5"} className="text-primary">
            {" "}
            Genre{" "}
          </Typography>
          <GenreSection />
        </div>
        <Top10Section />
      </div>
    </section>
  );
}
