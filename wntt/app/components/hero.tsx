'use client';
import '../globals.css';
{/* Fonts */}
import { Be_Vietnam_Pro} from 'next/font/google';
{/*VBold*/}const be_Vietnam_Pro = Be_Vietnam_Pro({subsets: ['latin'], weight: '800'})
{/*Light*/}const be_Vietnam_Pro_Light = Be_Vietnam_Pro({subsets: ['latin'], weight: '300'})
{/*VLight*/}const be_Vietnam_Pro_VLight = Be_Vietnam_Pro({subsets: ['latin'], weight: '200'})

export default function Hero(){
    return(
        <div className='heroContainer'>
        {/*Hero Title*/}
            <div className='heroTitle'>
                <div className = {be_Vietnam_Pro.className}>
                    <h1>WE'VE<br/>GOT TO<br/></h1>
                </div>
                <div className= {be_Vietnam_Pro_VLight.className}>
                    <div className='heroTitleThin'>
                        TALK.
                    </div>
                </div>
            </div>
        {/*Description*/}
        <div className='heroDisc'>
                <div className={be_Vietnam_Pro_VLight.className}>
                   The digital card game <br/>designed to be forgotten
                </div>
            </div>
        {/*Start Button*/}
        <div className= "startButton">
            <a href ='cards'><button className={be_Vietnam_Pro_Light.className}>Let's get started...</button></a> 
        </div>    
        </div>
            
    );
}