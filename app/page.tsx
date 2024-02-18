import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Trending from "./components/Trending/Trending";
import Featured from "./components/Featured/Featured";
import TopSection from "./components/TopSection/TopSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <Trending />
      <Featured />
      <TopSection />
      <Footer />
    </main>
  );
}
