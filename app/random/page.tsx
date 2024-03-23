import fetcher from "@/app/api/fetcher";
import endpoints from "@/app/api/mangas/endpoints";
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
import BookmarkButton from "../components/Buttons/BookmarkButton";

function SecondaryChild() {
  return (
    <>
      <GenreSection />
      <Top10Section />
    </>
  );
}

export default async function Page() {
  const data = await fetcher(endpoints.randomManga);
  const mangaInfo = data.data as JikanManga;
  const { images, title, synopsis, mal_id } = mangaInfo ?? {};

  return (
    <section>
      <section className="hero relative !bg-cover !bg-center">
        <div className="bg-slate-900/40 py-12 backdrop-blur-xl">
          <div className="container flex flex-col gap-4 sm:flex-row">
            <div className="h-[20vh] sm:h-[40vh] sm:basis-1/3">
              <img
                src={images.webp.image_url}
                loading="lazy"
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
                  text="Read Now"
                  icon={"material-symbols:play-circle-rounded"}
                  iconPlacement={"left"}
                  additionalClassNames="rounded-xl text-secondary-600 text-sm"
                />
                <BookmarkButton mal_id={mal_id} title={title} image={images.webp.image_url}/>
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
    </section>
  );
}
