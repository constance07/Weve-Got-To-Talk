'use client';
import '../../globals.css';
{/*Imported Components*/}
import Navigation from "@/app/components/navigation";
import Footer from "@/app/components/footer";
import Submittal from '@/app/components/submittal';
import Email from "@/app/(4)contact/email";
{/* Fonts */}
import { Be_Vietnam_Pro} from 'next/font/google';
{/*VBold*/}const be_Vietnam_Pro = Be_Vietnam_Pro({subsets: ['latin'], weight: '800'})
{/*Light*/}const be_Vietnam_Pro_Light = Be_Vietnam_Pro({subsets: ['latin'], weight: '300'})
{/*VLight*/}const be_Vietnam_Pro_VLight = Be_Vietnam_Pro({subsets: ['latin'], weight: '200'})
{/*General Imports*/}


export default function SubmittalMessage(){
    return(
        <div className= {be_Vietnam_Pro.className}>
         <Navigation/>
        <Submittal/>
         <Footer/>
        </div>
    )
}