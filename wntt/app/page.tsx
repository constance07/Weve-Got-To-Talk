import Image from "next/image";
import Navigation from "./components/navigation";
import Hero from "./components/hero";
import './globals.css'
{/* Fonts */}
import { Be_Vietnam_Pro} from 'next/font/google';
  {/*VBold*/}const be_Vietnam_Pro = Be_Vietnam_Pro({subsets: ['latin'], weight: '800'})


export default function Home() {
  return (
    <div className = {be_Vietnam_Pro.className}>
      <Navigation/>
      <Hero/>
    </div>
  );
}
