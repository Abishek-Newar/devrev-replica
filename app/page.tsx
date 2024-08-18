import Carousels from "@/components/Carousels";
import Experiences from "@/components/Experiences";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { StickyScrolls } from "@/components/StickyScrolls";


export default function Home() {
  return (
    <main className="w-[100vw] overflow-hidden" >
      <Navbar />
      <Hero />
      <StickyScrolls />
      <Experiences />
      <Carousels />
      <Features />
      <Footer />
    </main>
  );
}
