'use client';
import '../globals.css';
import './local.css';
{/* Fonts */}
import { Be_Vietnam_Pro} from 'next/font/google';
{/*VBold*/}const be_Vietnam_Pro = Be_Vietnam_Pro({subsets: ['latin'], weight: '800'})
{/*Light*/}const be_Vietnam_Pro_Light = Be_Vietnam_Pro({subsets: ['latin'], weight: '300'})
{/*VLight*/}const be_Vietnam_Pro_VLight = Be_Vietnam_Pro({subsets: ['latin'], weight: '200'})
{/* General Imports */}
import Image from 'next/image';
import card1 from '@/app/images/card1.jpg';
import card2 from '@/app/images/card2.jpg';
import card3 from '@/app/images/card3.jpg';
import card4 from '@/app/images/card4.jpg';
import card5 from '@/app/images/card5.jpg';
import card6 from '@/app/images/card6.jpg';
import card7 from '@/app/images/card7.jpg';
import lightBulb from '../images/lightBulb.png';
import megaphone from '../images/megaphone.png';
import pencil from '../images/pencil.png';
import { use, useEffect } from 'react';
import { useState } from 'react';
import Script from 'next/script';


export default function Card(){

    {/* */}
    const [currentCard, setCurrentCard] = useState(card1);

    return(
        
        <div className='cardContainer'>
            <div className= 'directionContainer'>
                <div className='directionTitle'>
                    <div className = {be_Vietnam_Pro.className}>
                        DIRECTIONS
                    </div>
                </div>
                <div className= 'directionDisc'>
                    <div className= {be_Vietnam_Pro_VLight.className}>
                        Each card is split into one of three sections: think, do, and state. 
                        With<Image id = "hello" src = {lightBulb} alt = "lightBulb" width={60} height={40} quality={100} ></Image>cards, think about your personal values, experiences, or beliefs. 
                        For <Image src = {megaphone} alt = "megaphone" width={45} height={35} quality={100} ></Image> cards, do something that is fun or makes you happy. 
                        Finally, <Image src = {pencil} alt = "pencil" width={48} height={34} quality={100}></Image> cards are short inspirational lines and quotes. 
                        <br/>
                        <br/>
                        When you play, complete the card corresponding 
                        to how far you have progressed into the game. 
                        Don’t be worried about taking an extra day or two to finish a card, especially for the 'do' ones, as they are more time intensive. 
                        <br/>
                        <br/>
                        After you're done with all cards, please submit your reflection <a id = "logoInTextHere" href = "https://docs.google.com/forms/d/e/1FAIpQLSeikU6P7wLMsNWsk5HuiVXIvjQYVsFjBaSRQZ_6tHmVuIx8_Q/viewform?usp=dialog"><div id = "logoInTextHere" className ={be_Vietnam_Pro.className}>HERE</div></a>. This part is very important as it will help me improve the game for future participants.      
                    </div>
                </div>
            </div>
            <div className='dayButtons'>
                
                        <div className='reflectionContainer'>
                            {/*Misuse of Id*/}
                                <h4 id = "chooseDay" className={be_Vietnam_Pro.className}>CHOOSE A DAY: </h4>
                                <div className='set1'>
                                    <button id = "cardDay" type ='button'onClick = {() => {setCurrentCard(card1)}}  className={be_Vietnam_Pro_Light.className}>#1</button>
                                    <button  id = "cardDay" type = 'button' onClick = {() => {setCurrentCard(card3)}} className={be_Vietnam_Pro_Light.className}>#2</button>
                                    <button id = "cardDay" type ='button' onClick = {() => {setCurrentCard(card2)}} className={be_Vietnam_Pro_Light.className}>#3</button>
                                    <button id = "cardDay" type ='button' onClick = {() => {setCurrentCard(card7)}} className={be_Vietnam_Pro_Light.className}>#4</button>
                                    <button id = "cardDay" type ='button' onClick = {() => {setCurrentCard(card5)}} className={be_Vietnam_Pro_Light.className}>#5</button>
                                    <button id = "cardDay" type ='button' onClick = {() => {setCurrentCard(card6)}} className={be_Vietnam_Pro_Light.className}>#6</button>
                                    <button id = "cardDay" type ='button' onClick = {() => {setCurrentCard(card4)}} className={be_Vietnam_Pro_Light.className}>#7</button>
                                </div>
                        </div>
                        
                </div>
            <div className='sliderContainer'>
                <Image 
                    id = "currentCard" 
                    src = {currentCard} 
                    alt = "Current Card" 
                    width={300}
                    height={215}
                    quality={100} >
                </Image>
            
            </div>
        </div>
        
    );
}