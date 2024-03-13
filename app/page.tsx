import Hero from "./components/Hero/Hero";
import Trending from "./components/Trending/Trending";
import RecentMangas from "./components/RecentMangas/RecentMangas";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Trending />
      <RecentMangas />
    </main>
  );
}
