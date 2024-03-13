import React from "react";
import IconButton from "../../Buttons/IconButton";
import Typography from "../../Typography/Typography";
import Image from "next/image";
import Link from "next/link";
import { JikanManga } from "@/app/types/Manga/Jikan/JikanMangaTypes";

export default function SingleSliderFullWidth({ item }: { item: JikanManga }) {
  const { images, mal_id, title, rank, synopsis } = item ?? {};


  return (
    <div className="relative min-w-[100%] px-2">
      <div className="absolute top-1/3 z-10 mx-6">
        <Typography variant={"caption"} className="my-4 text-primary">
          {" "}
          #{rank + 1} Ranking{" "}
        </Typography>
        <Typography variant={"h4"} className="my-3 text-white">
          {" "}
          {title}{" "}
        </Typography>
        <Typography
          variant={"body2"}
          className="sm:display-box my-3 line-clamp-3 hidden max-w-md text-white"
        >
          {synopsis}
        </Typography>

        <div className="flex gap-4">
          <IconButton
            intent={"primary"}
            text="Read Now"
            icon={"material-symbols:play-circle-rounded"}
            iconPlacement={"left"}
            additionalClassNames="rounded-xl text-secondary-600 text-sm"
          />
          <Link href={`/details/${mal_id}`}>
            <IconButton
              intent={"primary"}
              text="Details"
              icon={"iconamoon:arrow-right-2-duotone"}
              iconPlacement={"right"}
              additionalClassNames="rounded-xl text-secondary-600 text-sm bg-slate-200"
            />
          </Link>
        </div>
      </div>
      <img
        src={images.webp.image_url}
        alt={title}
        className="ml-auto h-full max-h-[600px] w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 to-secondary/40"></div>
      {/* <div className="absolute inset-0 bg-gradient-to-t from-transparent to-secondary"></div> */}
      <div className="absolute inset-0 h-16 bg-gradient-to-b from-secondary to-transparent"></div>
      <div className="absolute bottom-0 h-16 w-full bg-gradient-to-t from-secondary to-transparent"></div>

      {/* <div className="absolute inset-0 bg-gradient-to-b bottom-0 from-secondary to-transparent h-10"></div> */}
    </div>
  );
}
