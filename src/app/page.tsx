import Features from "@/components/features";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Hero2 from "@/components/hero2";
import Hero3 from "@/components/hero3";
import NavMenu from "@/components/navmenu";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen">
      <NavMenu />
      <Hero />
      <Hero2 />
      <Hero3 />
      <Features />
      <Footer />
     </main>  
  );
}
