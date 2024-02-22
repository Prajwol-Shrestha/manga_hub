"use client";

import React from "react";
import Typography from "../Typography/Typography";
import { Icon } from "@iconify/react";

export default function PGRatingCard({
  averageRating,
  ageRating
}: {
  averageRating: number | string;
  ageRating?: number | string | undefined;
}) {
  return (
    <div className="flex min-w-[50px]">
      <Typography
        variant={"caption"}
        className="rounded-bl-sm w-1/2 rounded-tl-sm bg-orange-400 p-1 text-xs font-semibold text-secondary"
      >
        {" "}
        {ageRating ?? 'PG-13'}
      </Typography>

      <div className="flex w-1/2 items-center justify-center gap-1 rounded-br-sm rounded-tr-sm bg-primary px-1 text-sm text-black">
        {" "}
        <Icon icon="ic:round-star" width="1.2rem" height="1.2rem" />{" "}
        <span className="text-xs font-semibold text-secondary">
          {" "}
          {averageRating ?? "N/A"}{" "}
        </span>{" "}
      </div>
    </div>
  );
}
