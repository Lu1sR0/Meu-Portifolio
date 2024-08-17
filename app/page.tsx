import Clients from "@/components/Clients";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Approach from "@/components/Approach";
import Experiencia from "@/components/Experiencia";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";
import { navItems } from "@/data";
import Footer from "@/components/Footer";
import Destaque from "@/components/Destaque";

export default function Home() {
  return (
   <main className="relative bg-black-100 flex justify-center 
   items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
       <Hero />
       <Grid />
       {/* <Destaque /> */}
       <RecentProjects />
       {/* <Clients /> */}
       <Experiencia />
       <Approach />
       <Footer />
      </div>
   </main>
  );
}
