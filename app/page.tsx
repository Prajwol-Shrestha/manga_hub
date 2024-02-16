import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Footer />
    </main>
  );
}
