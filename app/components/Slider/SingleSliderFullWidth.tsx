import React from "react";
import IconButton from "../Buttons/IconButton";
import Typography from "../Typography/Typography";
import { Manga } from "@/app/types/Manga/Kitsu/Manga";
import Image from "next/image";

export default function SingleSliderFullWidth({ item }: { item: Manga }) {
  const { attributes } = item ?? {};
  const { popularityRank, titles, posterImage, description, canonicalTitle } =
    attributes ?? {}

  return (
    <div className="relative min-w-[100%] px-2">
      <div className="absolute top-1/3 z-10 mx-6">
        <Typography variant={"caption"} className="my-4 text-primary">
          {" "}
          #{popularityRank} Ranking{" "}
        </Typography>
        <Typography variant={"h4"} className="my-3 text-white">
          {" "}
          {titles?.en_jp ?? titles?.en_us ?? titles?.zh_cn}{" "}
        </Typography>
        <Typography
          variant={"body2"}
          className="sm:display-box my-3 line-clamp-3 hidden max-w-md text-white"
        >
          {description}
        </Typography>

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
            text="Details"
            icon={"iconamoon:arrow-right-2-duotone"}
            iconPlacement={"right"}
            additionalClassNames="rounded-xl text-secondary-600 text-sm bg-slate-200"
          />
        </div>
      </div>
      <Image
        src={posterImage.original}
        width={800}
        height={600}
        alt={canonicalTitle}
        className="ml-auto h-full max-h-[600px] w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 to-secondary/40"></div>
      {/* <div className="absolute inset-0 bg-gradient-to-t from-transparent to-secondary"></div> */}
      <div className="absolute inset-0 h-16 bg-gradient-to-b from-secondary to-transparent"></div>
      <div className="absolute bottom-0 h-16 w-full bg-gradient-to-t from-secondary to-transparent"></div>

      {/* <div className="absolute inset-0 bg-gradient-to-b bottom-0 from-secondary to-transparent h-10"></div> */}
    </div>
  );
}
