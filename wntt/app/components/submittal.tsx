'use client';
{/*General Imports */}
import '../globals.css';
{/* Fonts */}
import { Be_Vietnam_Pro} from 'next/font/google';
{/*VBold*/}const be_Vietnam_Pro = Be_Vietnam_Pro({subsets: ['latin'], weight: '800'})
{/*Light*/}const be_Vietnam_Pro_Light = Be_Vietnam_Pro({subsets: ['latin'], weight: '300'})
{/*VLight*/}const be_Vietnam_Pro_VLight = Be_Vietnam_Pro({subsets: ['latin'], weight: '200'})

export default function Submittal(){
    return(
        <>
            <div className='submittalContainer'>
                <h2 className= {be_Vietnam_Pro.className} id = "mainMessage">
                    Thank you!
                </h2>
                <h3 className= {be_Vietnam_Pro_Light.className}  id = "subMessage">
                    I've received your message and will be in touch with you soon
                </h3>
            </div>
        </>
    )
}