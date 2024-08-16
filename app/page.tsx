import Experiences from "@/components/Experiences";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <main >
      <Navbar />
      <Hero />
      <Experiences />
      <Features />
    </main>
  );
}
