import Image from "next/image";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Button from "./components/Buttons/Button";
const image = "/assets/estate.png";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="hero">
        <div className="min-h-[500px]">
          <h3> The Greatest Estate Developer </h3>
          <Button intent="primary" size={'medium'}> Watch Now </Button>
        </div>

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
      <Footer />
    </main>
  );
}
