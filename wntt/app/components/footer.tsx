'use client';
import '../globals.css'
{/* Fonts */}
import { Be_Vietnam_Pro} from 'next/font/google';
{/*VBold*/}const be_Vietnam_Pro = Be_Vietnam_Pro({subsets: ['latin'], weight: '800'})
{/*Light*/}const be_Vietnam_Pro_Light = Be_Vietnam_Pro({subsets: ['latin'], weight: '300'})
{/*VLight*/}const be_Vietnam_Pro_VLight = Be_Vietnam_Pro({subsets: ['latin'], weight: '200'})
{/*General Imports*/}
import Image from 'next/image';
import blankProfile from '../images/blankProfile.jpg';
import THOSLogo from '../images/THOSLogo.png';

export default function Footer(){
    return(
        <>
            <div className='footerContainer'>
                {/*Footer Image*/}
                <Image 
                    src = {THOSLogo}  
                    width = {60} 
                    height = {75} 
                    alt = 'Picture of Brand Logo' 
                    quality={100} 
                    className='logoContainer'>
                </Image>
                {/*Footer Title*/}
                <div className='footerTitle'>
                    <div className={be_Vietnam_Pro.className}>
                        © 2025 THE HAUS OF SOFTWARE™. All Rights Reserved.
                    </div>
                </div>
                {/*Footer Subtitle*/}
                <div className='footerSubTitle'>
                    <div className= {be_Vietnam_Pro_VLight.className}>
                        Created so you don't become a stranger to yourself.
                    </div>
                </div>
            </div>
        </>
    )
}