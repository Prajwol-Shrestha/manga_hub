import React from "react";
import CustomSliderFullWidth from "../Slider/CustomSliderFullWidth";
import fetcher from "@/app/apis/fetcher";
import endpoints from "@/app/apis/mangas/endpoints";


export default async function Hero() {
  const data = await fetcher("kitsu",endpoints.mangaList, {"page[limit]": '10', "sort": "popularityRank"})
  return (
    <div className="sm:container">
      <CustomSliderFullWidth  items={data.data} />
      {/* <div className="relative inline-block" >
          <Image src={image} width={600} height={500} alt="image" />
          <div className="absolute inset-0">
            <div className="absolute  bg-gradient-to-t from-transparent to-secondary top-0 w-full h-16"></div>
            <div className="absolute bg-gradient-to-b from-transparent to-secondary bottom-0 w-full h-full"></div>
            <div className="absolute bg-gradient-to-r from-transparent to-secondary right-0 w-full h-full"></div>
            <div className="absolute bg-gradient-to-l from-transparent to-secondary left-0 w-16 h-full"></div>
          </div>
        </div> */}
    </div>
  );
}
