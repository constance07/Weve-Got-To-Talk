'use client';
import '../globals.css'
{/* Fonts */}
import { Be_Vietnam_Pro} from 'next/font/google';
{/*VBold*/}const be_Vietnam_Pro = Be_Vietnam_Pro({subsets: ['latin'], weight: '800'})
{/*Light*/}const be_Vietnam_Pro_Light = Be_Vietnam_Pro({subsets: ['latin'], weight: '300'})
{/*VLight*/}const be_Vietnam_Pro_VLight = Be_Vietnam_Pro({subsets: ['latin'], weight: '200'})

export default function Library(){
    return(
        <>
            <div className = "libraryContainer">

            </div>
        </>
    )
}



{/*  Library Title(Active Account)
    <div className = {be_Vietnam_Pro.className}>
        <h1>___'s JOURNAL</h1>
    </div>
    <div className= {be_Vietnam_Pro_Light.className}>
        <div className='libraryTitleThin'>
            Look at you! I see that progress, keep it up!
        </div>
    </div>
*/}