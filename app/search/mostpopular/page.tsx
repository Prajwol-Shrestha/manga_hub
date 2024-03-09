import fetcher from "@/app/api/fetcher";
import endpoints from "@/app/api/mangas/endpoints";
import GenreSearchSection from "@/app/components/GenreSearchSection/GenreSearchSection";
import GenreSection from "@/app/components/GenreSection/GenreSection";
import Top10Section from "@/app/components/Top10Section/Top10Section";
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

export default async function Page() {
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
