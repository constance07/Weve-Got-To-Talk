'use client';
import '../globals.css'
{/* Fonts */}
import { Be_Vietnam_Pro} from 'next/font/google';
{/*VBold*/}const be_Vietnam_Pro = Be_Vietnam_Pro({subsets: ['latin'], weight: '800'})
{/*Light*/}const be_Vietnam_Pro_Light = Be_Vietnam_Pro({subsets: ['latin'], weight: '300'})
{/*VLight*/}const be_Vietnam_Pro_VLight = Be_Vietnam_Pro({subsets: ['latin'], weight: '200'})
{/*General Imports*/}
import Image from 'next/image'

export default function Email(){
    return(
        <>
            <div className='contactContainer'>
                {/*Title*/}
                <div className='contactTitle'>
                    <div className= {be_Vietnam_Pro.className}>
                        <h1><center>LET'S CONNECT</center></h1>
                    </div>
                </div>
                {/*Title*/}
                <div className ='contactSubTitle'>
                    <div className={be_Vietnam_Pro_VLight.className}>
                        <center>Ask me anything, or just say hi... </center>
                    </div>
                </div>
            </div>
        </>
    )
}