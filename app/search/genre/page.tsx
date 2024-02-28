import fetcher from "@/app/apis/fetcher";
import endpoints from "@/app/apis/mangas/endpoints";
import GenreSearchSection from "@/app/components/GenreSearchSection/GenreSearchSection";
import GenreSection from "@/app/components/TopSection/GenreSection";
import RecentMangas from "@/app/components/TopSection/RecentMangas";
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

export default async function page(params) {
  const { searchParams } = params ?? {};
  const { id, name } = searchParams;
  const endpoint = endpoints.mangaList;
  const data = await fetcher(endpoint, { genres: `${id}` });
  const datas = data.data as JikanManga[];
  return (
    <TwoThirdsOneThirdLayout
      primaryChild={<GenreSearchSection title={name} datas={datas} />}
      secondaryChild={<SecondaryChildren />}
    />
  );
}
