import FeaturedCourses from "@/Components/FeaturedCourses";
import Footer from "@/Components/Footer";
import HeroSection from "@/Components/HeroSection";
import Instructor from "@/Components/Instructor";
import MovingCard from "@/Components/MovingCard";
import Webinars from "@/Components/Webinars";
import WhychooseUs from "@/Components/WhychooseUs";
import { main } from "motion/react-client"


export default function Home() {
  return (
   <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">

     {/* <h1 className="text-2xl text-center">Hello World</h1> */}
     <HeroSection/>
     <FeaturedCourses/>
     <WhychooseUs/>
     <MovingCard/>
     <Webinars/>
     <Instructor/>
     <Footer/>
   </main>
  );
}
