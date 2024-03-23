import Hero from "./components/Hero/Hero";
import Trending from "./components/Trending/Trending";
import RecentMangas from "./components/RecentMangas/RecentMangas";
import { Suspense } from "react";
import CardSkeleton from "./components/Skeletons/CardSkeleton";
import ImageSkeleton from "./components/Skeletons/ImageSkeleton";

const HeroSkeleton = () => {
  return (
    <div className="flex flex-col gap-4 sm:container">
      <ImageSkeleton />
      <div className="relative flex flex-nowrap gap-2 overflow-x-hidden">
        {new Array(8).fill(0).map((_, index) => (
          <CardSkeleton key={index} />
        ))}
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <section className="flex flex-col">
      <Suspense fallback={<HeroSkeleton />}>
        <Hero />
        <Trending />
        <RecentMangas />
      </Suspense>
    </section>
  );
}
