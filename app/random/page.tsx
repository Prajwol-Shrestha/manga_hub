import fetcher from "@/app/apis/fetcher";
import endpoints from "@/app/apis/mangas/endpoints";
import IconButton from "@/app/components/Buttons/IconButton";
import RecommendedMangas from "@/app/components/RecommendedSection/RecommendedMangas";
import GenreSection from "@/app/components/GenreSection/GenreSection";
import RecentMangas from "@/app/components/RecentMangas/RecentMangas";
import Top10Section from "@/app/components/Top10Section/Top10Section";
import TopSection from "@/app/components/TopSection/TopSection";
import Typography from "@/app/components/Typography/Typography";
import TwoThirdsOneThirdLayout from "@/app/components/layouts/TwoThirdsOneThirdLayout";
import { JikanManga } from "@/app/types/Manga/Jikan/JikanMangaTypes";
import Image from "next/image";
import React from "react";
import Overlay from "../components/Overlay/Overlay";

function SecondaryChild() {
  return (
    <>
      <GenreSection />
      <Top10Section />
    </>
  );
}

export default async function page() {
  const data = await fetcher(endpoints.randomManga);
  const mangaInfo = data.data as JikanManga;
  const { images, title, synopsis, mal_id } = mangaInfo ?? {};

  return (
    <main>
      <section className="hero relative !bg-cover !bg-center">
        <div className="bg-slate-900/40 py-12 backdrop-blur-xl">
          <div className="container flex flex-col gap-4 sm:flex-row">
            <div className="h-[20vh] sm:h-[40vh] sm:basis-1/3">
              <Image
                src={images.webp.image_url}
                width={600}
                height={400}
                alt={title}
                className="h-full object-contain"
              />
            </div>
            <div className="flex flex-col gap-3 sm:basis-1/2">
              <Typography variant={"h3"} className="text-white">
                {title}
              </Typography>
              <div></div>
              <div className="flex gap-4">
                <IconButton
                  intent={"primary"}
                  text="Watch Now"
                  icon={"material-symbols:play-circle-rounded"}
                  iconPlacement={"left"}
                  additionalClassNames="rounded-xl text-secondary-600 text-sm"
                />
                <IconButton
                  intent={"primary"}
                  text="Add to List"
                  icon={"ic:baseline-plus"}
                  iconPlacement={"right"}
                  additionalClassNames="rounded-xl text-secondary-600 text-sm bg-slate-200"
                />
              </div>
              <Typography
                variant={"body1"}
                className="mt-8 line-clamp-3 max-w-[80%] text-white/90"
              >
                {synopsis}
              </Typography>
            </div>
          </div>
        </div>
        <Overlay direction="top" />
      </section>
      <TwoThirdsOneThirdLayout
        primaryChild={<RecommendedMangas id={String(mal_id)} />}
        secondaryChild={<SecondaryChild />}
      />
    </main>
  );
}