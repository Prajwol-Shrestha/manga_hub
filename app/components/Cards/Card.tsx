import Image from "next/image";
import React from "react";
import Typography from "../Typography/Typography";
import Dot from "../Dot/Dot";

const image = "/assets/estate.png";

export default function Card() {
  return (
    <div className="sm:max-w-[250px] min-w-[200px] bg-secondary-400 flex-1">
      <div className="relative h-[200px]">
        <Image
          src={image}
          width={200}
          height={400}
          alt="test"
          className="h-full w-full object-cover"
        />
        <div className="absolute bottom-0 h-full w-full bg-gradient-to-b from-transparent to-secondary-400"></div>
        <div className="absolute bottom-[-.5rem] left-2 flex">
          <Typography
            variant={"caption"}
            className="rounded-bl-sm rounded-tl-sm bg-orange-400 p-1 text-xs font-semibold text-secondary"
          >
            {" "}
            PG-13{" "}
          </Typography>
          <Typography
            variant={"caption"}
            className="rounded-br-sm rounded-tr-sm bg-primary p-1 text-xs font-semibold text-secondary"
          >
            {" "}
            CC:1{" "}
          </Typography>
        </div>
      </div>
      <div className="px-2 py-4">
        <Typography variant={"body2"} className="line-clamp-1 text-white">
          {" "}
          The Greatest Estate Developer Developer{" "}
        </Typography>
        <div className="mt-1 flex items-center gap-3">
          <Typography variant={"caption"} className="text-secondary-300">
            {" "}
            1 hr 46{" "}
          </Typography>
          <Dot />
          <Typography variant={"caption"} className="text-secondary-300">
            {" "}
            Movie{" "}
          </Typography>
        </div>
      </div>
    </div>
  );
}
