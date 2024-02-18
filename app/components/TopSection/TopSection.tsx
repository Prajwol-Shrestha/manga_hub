"use client";

import React from "react";
import Typography from "../Typography/Typography";
import Card from "../Cards/Card";
import Button from "../Buttons/Button";
import Divider from "../Divider/Divider";
import { Icon } from "@iconify/react";
import Image from "next/image";
const image = "/assets/estate.png";

const titles = ["Top Movies", "Specials", "Top OVA's"];

export default function TopSection() {
  return (
    <section className="container flex flex-col-reverse gap-6 py-12 lg:flex-row lg:gap-12">
      <div className="flex w-full flex-col gap-12 lg:w-[75%]">
        {titles.map((title, index) => (
          <div>
            <Typography variant={"h5"} className="text-primary">
              {title}
            </Typography>
            <div className="mt-6 flex flex-wrap  gap-x-4 gap-y-8">
              {new Array(8).fill(0).map((item, index) => (
                <Card key={index} />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="w-full lg:w-[25%]">
        <div>
          <Typography variant={"h5"} className="text-primary">
            {" "}
            Genre{" "}
          </Typography>
          <div className="mt-6 rounded-sm  bg-secondary-400 px-4 py-6">
            <div className="mb-5 flex flex-wrap gap-4 md:grid md:grid-cols-3">
              {new Array(20).fill(0).map((item, index) => (
                <Typography
                  variant={"caption"}
                  className="rounded-md bg-secondary px-5 py-2 text-xs text-white lg:bg-transparent"
                >
                  {" "}
                  Action{" "}
                </Typography>
              ))}
            </div>
            <Button intent={"primary"} className="w-full bg-secondary-300/80">
              {" "}
              Show More{" "}
            </Button>
          </div>
        </div>
        <div>
          <div className="mt-8 flex items-center justify-between">
            <Typography variant={"h5"} className="text-primary">
              {" "}
              Top 10{" "}
            </Typography>
            <div className="flex rounded-lg bg-secondary-400">
              <div className="rounded-bl-lg rounded-tl-lg bg-primary px-3 py-2 text-sm text-secondary">
                Today
              </div>
              <div className="px-3 py-2 text-sm text-white">Week</div>
              <div className="rounded-br-lg rounded-tr-lg px-3 py-2 text-sm text-white">
                Month
              </div>
            </div>
          </div>
          <div className="mt-6  rounded-sm bg-secondary-400 px-4 py-6">
            {new Array(10).fill(0).map((item, index) => (
                <div className="flex  items-center  gap-6" key={index}>
                <div>
                <Typography variant={"h6"} className="text-white">
                    {" "}
                    {index >= 9 ? '' : 0}{index + 1}
                </Typography>
                </div>
                <div className="mt-4 flex flex-1 flex-col gap-4">
                <>
                    <div className="flex items-center gap-4">
                    <div className="h-[100px] rounded-lg">
                        <Image
                        src={image}
                        width={80}
                        height={100}
                        alt="estate"
                        className="h-full rounded-lg object-cover"
                        />
                    </div>
                    <div className="w-[60%]">
                        <Typography
                        variant={"body2"}
                        className="line-clamp-2 font-bold text-white"
                        >
                        {" "}
                        The Greatest Estate Developer The Greatest Estate
                        Developer{" "}
                        </Typography>
                        <div className="mt-3 flex items-center">
                        <div className="rounded-bl-sm rounded-tl-sm bg-orange-400 px-2 text-center text-xs text-black">
                            {" "}
                            CC:28{" "}
                        </div>
                        <div className="flex items-center justify-center rounded-br-sm rounded-tr-sm  bg-primary px-2 text-xs text-black">
                            {" "}
                            <Icon
                            icon="ic:round-star"
                            width="1rem"
                            height="1rem"
                            />{" "}
                            <span> 9.12 </span>{" "}
                        </div>
                        <Typography
                            variant={"body2"}
                            className="ml-3 text-xs text-white"
                        >
                            {" "}
                            TV
                        </Typography>
                        </div>
                    </div>
                    </div>
                    <Divider />
                </>
                </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
