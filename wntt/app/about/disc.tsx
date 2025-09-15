'use client';
import '../globals.css'
import './local.css';
{/* Fonts */}
import { Be_Vietnam_Pro} from 'next/font/google';
{/*VBold*/}const be_Vietnam_Pro = Be_Vietnam_Pro({subsets: ['latin'], weight: '800'})
{/*Light*/}const be_Vietnam_Pro_Light = Be_Vietnam_Pro({subsets: ['latin'], weight: '300'})
{/*VLight*/}const be_Vietnam_Pro_VLight = Be_Vietnam_Pro({subsets: ['latin'], weight: '200'})
{/*General Imports*/}
import Image from 'next/image';
import bwCandyStore from '../images/bwCandyStore.jpg'
import whiteIndexCard from '../images/whiteIndexCard.png'

export default function Disc(){
    return(
        <>
            <div className='discContainer'>
                {/*My Name*/}
                <div className = 'nameContainer'>
                    <div className = {be_Vietnam_Pro.className}>
                        <h1><center>SERENITY</center>BUCKNER</h1>
                    </div>
                </div>
                {/* My Image */}
                <Image 
                    src = {bwCandyStore} 
                    width = {380} 
                    height = {80} 
                    alt = 'Picture of website creator' 
                    quality={100} 
                    className = 'imageContainer'>
                </Image>
                {/*Box --> a.k.a actual disc lol */ }
                <div className = "personalContainer">
                    <div id = "allWords" className ={be_Vietnam_Pro_Light.className}>
                        <h1 id = "introWord">Hey :)</h1> My name is Serenity Buckner and I’m the creator of <div id = "logoInText" className ={be_Vietnam_Pro.className}>WE'VE GOT TO</div>
                        <div id = "logoInText" className ={be_Vietnam_Pro_Light.className}> TALK. </div>
                         First off, I want to give a huge thank you to those who have played my game for being a part of such a meaningful experience. 
                        It takes genuine courage to learn who you are beyond the beliefs and values you've been taught or conditioned to inherit, albeit by others, or maybe even yourself. 
                        <br/>
                        <br/>
                        In truth, growing up, I really didn’t care much for intentionally creating an identity separate from the titles I had received: 
                        I trained hard so I could be star goalkeeper, picked up new instruments so I could seem cool or impressive, pretended to be stupid so I could be class clown, but still got good grades so I could be my family's smart kid. 
                        And you know what? For a while, I was fine— genuinely. But, if at any moment all that had been taken away from me, you wouldn't find a person, but a mirror. 
                        A lot of what I thought I knew about myself, I didn’t personally create; it was mostly just a reflection of what was expected of me. As crazy as it sounds, I never really stopped to ask the question of what I had truly wanted out of my own life. Though, I would like to clarify that I don't think this is an inherently bad thing: 
                        self discovery is an important process in growing up. But, it was only when I had gotten older that I had realized this and knew something had to be done. 
                        <br/>
                        <br/>
                        That’s what brings us here. If you learn anything from playing, let it be this: you do not have to be fearless in confronting yourself, 
                        but you must possess the courage to do so and an unshakeable sense of self belief that you will always figure things out, no matter what. This is not an easy task, I know change can be scary. However, it's also a natural part of life. 
                        So, our goal shouldn’t be to fight that change, but to make room for it, all of it: the beautiful, the stupid, the great, the ugly, the wonderful, the bad. 
                        For no one can tell you who you are or what you can do. 
                        <br/>
                        <br/>
                        That’s up to you to define.

                        </div>
                </div>
            </div>
        </>
    )
}