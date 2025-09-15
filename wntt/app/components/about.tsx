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
                    <h1>BE HONEST,</h1>
                </div>
            </div>
            {/*About Sub-Title*/}
            <div className='aboutSubTitle'>
                <div className= {be_Vietnam_Pro_Light.className}>
                    How much do you really know about yourself?
                </div>
            </div>
            {/*About Description*/}
            <div className='aboutDisc'>
                <div className= {be_Vietnam_Pro_Light.className}>
                    In considering the question, you probably thought to respond with your name, some details about your personality, or maybe a few miscellaneous hobbies, but that's not what I'm asking for. 
                    Today, the way we define ourselves is primarily based on these labels: how we can fit into a larger social category
                    (i.e. “I'm good at basketball'", “I'm very funny", “I like to play video games”, etc.). But, what if all that were to be taken away from you? Is there anything left?
                    <div id = 'logoInText' className= {be_Vietnam_Pro.className}> WE'VE GOT TO</div> <div id = 'logoInText' className= {be_Vietnam_Pro_Light.className}> TALK</div> about how to find yourself separate from titles by focusing on the opinions, ideas, and beliefs that create them. 
                    So, if you're really curious about how to answer this question, start playing to find out. But, remember this experience as a new perspective to approach life with, not just a card game.


                </div>
            </div>
        </div>
    )
}