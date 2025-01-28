import Image from "next/image";
import './globals.css'
{/*Imported Components*/}
import Navigation from "./components/navigation";
import Hero from "./components/hero";
import About from "./components/about";
import Footer from "./components/footer";
{/* Fonts */}
import { Be_Vietnam_Pro} from 'next/font/google';
{/*VBold*/}const be_Vietnam_Pro = Be_Vietnam_Pro({subsets: ['latin'], weight: '800'})


export default function Home() {
  return (
    <div className = {be_Vietnam_Pro.className}>
      <Navigation/>
      <Hero/>
      <About/>
      <Footer/>
    </div>
  );
}
