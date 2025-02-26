import Image from "next/image";
import '../journal/local.css';
{/* Figure out how to import global css*/}
{/*Imported Components*/}
import Navigation from "@/app/components/navigation";
import Footer from "@/app/components/footer";
import Library from "@/app/components/library";
{/* Fonts */}
import { Be_Vietnam_Pro} from 'next/font/google';
{/*VBold*/}const be_Vietnam_Pro = Be_Vietnam_Pro({subsets: ['latin'], weight: '800'})


export default function Journal() {
  return (
    <div className = {be_Vietnam_Pro.className}>
        <Navigation/>
        {/*Fix CSS sizing for Nav*/}
        <Library/>
        <Footer/>
    </div>
  );
}