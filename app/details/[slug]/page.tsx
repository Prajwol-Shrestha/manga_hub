import fetcher from "@/app/api/fetcher";
import endpoints from "@/app/api/mangas/endpoints";
import IconButton from "@/app/components/Buttons/IconButton";
import RecommendedMangas from "@/app/components/RecommendedSection/RecommendedMangas";
import GenreSection from "@/app/components/GenreSection/GenreSection";
import Top10Section from "@/app/components/Top10Section/Top10Section";
import Typography from "@/app/components/Typography/Typography";
import TwoThirdsOneThirdLayout from "@/app/components/layouts/TwoThirdsOneThirdLayout";
import { JikanManga } from "@/app/types/Manga/Jikan/JikanMangaTypes";
import Image from "next/image";
import React from "react";
import BookmarkButton from "@/app/components/Buttons/BookmarkButton";
import Link from "next/link";

function SecondaryChild() {
  return (
    <>
      <GenreSection />
      <Top10Section />
    </>
  );
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const endpoint = endpoints.manga.concat(`/${slug}`);
  const data = await fetcher(endpoint);
  const mangaInfo = data.data as JikanManga;
  const { images, title, synopsis, mal_id, url } = mangaInfo ?? {};

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
                <Link href={url} target="_blank">
                <IconButton
                  intent={"primary"}
                  text="Read Now"
                  icon={"material-symbols:play-circle-rounded"}
                  iconPlacement={"left"}
                  additionalClassNames="rounded-xl text-secondary-600 text-sm"
                />
                </Link>
                <BookmarkButton
                  mal_id={mal_id}
                  title={title}
                  image={images.webp.image_url}
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
        {/* <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 to-secondary/40"></div> */}
        {/* <div className="absolute inset-0 bg-gradient-to-t from-transparent to-secondary"></div> */}
        {/* <div className="absolute inset-0 h-16 bg-gradient-to-b from-secondary to-transparent"></div> */}
        <div className="absolute bottom-0 h-16 w-full bg-gradient-to-t from-secondary to-transparent"></div>
      </section>
      <TwoThirdsOneThirdLayout
        primaryChild={<RecommendedMangas id={slug} />}
        secondaryChild={<SecondaryChild />}
      />
    </section>
  );
}
