"use client";

import React from "react";
import Typography from "../Typography/Typography";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Divider from "../Divider/Divider";
const image = "/assets/estate.png";

export default function Featured() {
  return (
    <section className="container py-12">
      <div className="grid-columns grid justify-between gap-x-8 gap-y-12">
        {new Array(4).fill(0).map((item, index) => (
          <div key={index}>
            <Typography variant={"h6"} className="text-primary">
              {" "}
              Top Airing{" "}
            </Typography>
            <div className="mt-4 flex flex-col gap-4">
              {new Array(4).fill(0).map((item, index) => (
                <>
                  <div key={index} className="flex items-center gap-4">
                    <div className="h-[150px] rounded-lg">
                      <Image
                        src={image}
                        width={130}
                        height={150}
                        alt="estate"
                        className="h-full rounded-lg object-cover"
                      />
                    </div>
                    <div className="w-[60%]">
                      <Typography
                        variant={"body2"}
                        className="line-clamp-2  font-bold text-white"
                      >
                        {" "}
                        The Greatest Estate Developer The Greatest Estate
                        Developer{" "}
                      </Typography>
                      <div className="mt-3 flex items-center gap-2">
                        <div className=" w-16 rounded-sm bg-orange-400 px-1 text-center text-sm text-black">
                          {" "}
                          CC:28{" "}
                        </div>
                        <div className="flex w-16 items-center justify-center rounded-sm bg-primary px-1 text-sm text-black">
                          {" "}
                          <Icon
                            icon="ic:round-star"
                            width="1.2rem"
                            height="1.2rem"
                          />{" "}
                          <span> 9.12 </span>{" "}
                        </div>
                        <Typography
                          variant={"body2"}
                          className="ml-3 text-secondary-300"
                        >
                          {" "}
                          . TV
                        </Typography>
                      </div>
                    </div>
                  </div>
                  <Divider />
                  {index === 3 && (
                    <Typography variant={"body1"} className="text-white">
                      {" "}
                      View More{" "}
                    </Typography>
                  )}
                </>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
