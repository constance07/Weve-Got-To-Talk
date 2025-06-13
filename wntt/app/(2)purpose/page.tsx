import Image from "next/image";
{/* Figure out how to import global css*/}
{/*Imported Components*/}
import Navigation from "@/app/components/navigation";
import Footer from "@/app/components/footer";
import Carousel from "../components/carousel";
import Hero from "../components/hero";
import About from "../components/about";
import Library from "@/app/components/library";
{/* Fonts */}
import { Be_Vietnam_Pro} from 'next/font/google';
{/*VBold*/}const be_Vietnam_Pro = Be_Vietnam_Pro({subsets: ['latin'], weight: '800'})


export default function Journal() {
  return (
    <div className = {be_Vietnam_Pro.className}>
      <Navigation/>
      <Carousel/>
      <Footer/>
    </div>
  );
}