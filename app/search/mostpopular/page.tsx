import fetcher from "@/app/apis/fetcher";
import endpoints from "@/app/apis/mangas/endpoints";
import GenreSearchSection from "@/app/components/GenreSearchSection/GenreSearchSection";
import GenreSection from "@/app/components/TopSection/GenreSection";
import Top10Section from "@/app/components/TopSection/Top10Section";
import TwoThirdsOneThirdLayout from "@/app/components/layouts/TwoThirdsOneThirdLayout";
import { JikanManga } from "@/app/types/Manga/Jikan/JikanMangaTypes";
import React from "react";

function SecondaryChildren() {
  return (
    <>
      <GenreSection />
      <Top10Section />
    </>
  );
}

export default async function page() {
  const endpoint = endpoints.mangaList;
  const data = await fetcher(endpoint, { "orderBy": "popularity" });
  const datas = data.data as JikanManga[];
  return (
    <TwoThirdsOneThirdLayout
      primaryChild={<GenreSearchSection title={'Most Popular'} datas={datas} />}
      secondaryChild={<SecondaryChildren />}
    />
  );
}
