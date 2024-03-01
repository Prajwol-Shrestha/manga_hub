import Hero from "./components/Hero/Hero";
import Trending from "./components/Trending/Trending";
import Featured from "./components/Featured/Featured";
import TopSection from "./components/TopSection/TopSection";
import RecentMangas from "./components/RecentMangas/RecentMangas";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Trending />
      <RecentMangas />
    </main>
  );
}
