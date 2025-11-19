import Image from "next/image";
import HeroSection from "@/components/home/HeroSection";
import OverMij from "@/components/home/OverMij";
import Projecten from "@/components/home/Projecten";
import Contact from "@/components/home/Contact";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <OverMij />
      <Projecten />
      <Contact />
    </main>
  );
}
