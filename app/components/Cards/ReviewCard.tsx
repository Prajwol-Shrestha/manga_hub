import Image from "next/image";
import Link from "next/link";
import React from "react";
import Typography from "../Typography/Typography";
import Button from "../Buttons/Button";
import { Review } from "../../types/Manga/Jikan/JikanMangaTypes";
import tagColor from "../../utils/tagColor";
import IconButton from "../Buttons/IconButton";

export default function ReviewCard({ review }: { review: Review }) {
  const { entry, mal_id, user, date, tags, review: mangaReview } = review ?? {};

  return (
    <div className="flex gap-4 rounded bg-secondary-400">
      <div className="h-full w-1/3 rounded">
        <Image
          src={entry.images.webp.image_url}
          width={200}
          height={200}
          alt={entry.title}
          className="h-full w-full rounded-bl rounded-tl object-fill"
        />
      </div>
      <div className="w-2/3 px-2 py-4">
        <Link href={`/details/${entry.mal_id}`}>
          <Typography variant={"h6"} className="text-white">
            {" "}
            {entry.title}{" "}
          </Typography>
        </Link>
        <div className="my-2 flex flex-col text-white/80">
          <Typography variant={"caption"}>
            {" "}
            Posted By: {user.username}
          </Typography>
          <Typography variant={"caption"}> Posted on: {date}</Typography>
        </div>
        <div className="my-4 flex gap-2 flex-wrap">
          {tags.map((tag, index) => (
            <Button
              intent={"chip"}
              size={"extraSmall"}
              key={index}
              className={`border border-secondary-600 ${tagColor(tag)}`}
            >
              {" "}
              {tag}{" "}
            </Button>
          ))}
        </div>
        <Typography
          variant={"caption"}
          className="line-clamp-3 pr-2 text-white/70"
        >
          {" "}
          {mangaReview}{" "}
        </Typography>
        <div className="flex mt-4 gap-2 flex-col sm:flex-row">
          <Link href={`/details/${entry.mal_id}`} className="sm:w-1/2">
            <IconButton
              intent={"primary"}
              text="Details"
              icon={"iconamoon:arrow-right-2-light"}
              iconPlacement={"right"}
              additionalClassNames="rounded-xl text-secondary-600 text-sm bg-slate-200 w-full"
            />
          </Link>
          <IconButton
            text="Add to Bookmarks"
            intent={"secondary"}
            iconPlacement="right"
            icon={"ic:baseline-plus"}
            additionalClassNames="rounded-xl text-white text-sm bg-secondary hover:text-secondary w-full sm:max-w-[300px]"
          />
        </div>
      </div>
    </div>
  );
}
