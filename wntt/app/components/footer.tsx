'use client';
import '../globals.css'
{/* Fonts */}
import { Be_Vietnam_Pro} from 'next/font/google';
{/*VBold*/}const be_Vietnam_Pro = Be_Vietnam_Pro({subsets: ['latin'], weight: '800'})
{/*Light*/}const be_Vietnam_Pro_Light = Be_Vietnam_Pro({subsets: ['latin'], weight: '300'})
{/*VLight*/}const be_Vietnam_Pro_VLight = Be_Vietnam_Pro({subsets: ['latin'], weight: '200'})

export default function Footer(){
    return(
        <>
            <div className='footerContainer'>
                {/*Footer Title*/}
                <div className='footerTitle'>
                    <div className={be_Vietnam_Pro.className}>
                        SHARE YOURE THOUGHTS
                    </div>
                </div>
                {/*Footer Subtitle*/}
                <div className='footerSubTitle'>
                    <div className= {be_Vietnam_Pro_VLight.className}>
                        I’d love to hear your feedback:
                    </div>
                </div>
                {/*Email*/}
                <div className='footerEmail'>
                    <div className= {be_Vietnam_Pro_VLight.className}>
                        Serenc0107@gmail.com
                    </div>
                </div>
            </div>
        </>
    )
}