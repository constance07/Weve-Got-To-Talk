'use client';
import '../globals.css'
{/* Fonts */}
import { Be_Vietnam_Pro} from 'next/font/google';
{/*VBold*/}const be_Vietnam_Pro = Be_Vietnam_Pro({subsets: ['latin'], weight: '800'})
{/*Light*/}const be_Vietnam_Pro_Light = Be_Vietnam_Pro({subsets: ['latin'], weight: '300'})
{/*VLight*/}const be_Vietnam_Pro_VLight = Be_Vietnam_Pro({subsets: ['latin'], weight: '200'})

export default function About(){
    return(
        <div className ="aboutContainer">
            {/*About Title*/}
            <div className='aboutTitle'>
                <div className = {be_Vietnam_Pro.className}>
                    <h1>LET'S BE HONEST</h1>
                </div>
            </div>
            {/*About Sub-Title*/}
            <div className='aboutSubTitle'>
                <div className= {be_Vietnam_Pro_Light.className}>
                    You probably don't know who you are.
                </div>

            </div>
        </div>
    )
}