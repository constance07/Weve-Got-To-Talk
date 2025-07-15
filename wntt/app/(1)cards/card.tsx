'use client';
import '../globals.css';
{/* Fonts */}
import { Be_Vietnam_Pro} from 'next/font/google';
{/*VBold*/}const be_Vietnam_Pro = Be_Vietnam_Pro({subsets: ['latin'], weight: '800'})
{/*Light*/}const be_Vietnam_Pro_Light = Be_Vietnam_Pro({subsets: ['latin'], weight: '300'})
{/*VLight*/}const be_Vietnam_Pro_VLight = Be_Vietnam_Pro({subsets: ['latin'], weight: '200'})
{/* General Imports */}
import Image from 'next/image';
import BGblue from '@/app/images/BGblue.jpg';
import BGred from '@/app/images/BGred.jpg';
import BGgreen from '@/app/images/BGgreen.jpg';
import BGyellow from '@/app/images/BGyellow.jpg';

export default function Card(){
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
                        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab 
                        illo inventore veritatis et quasi architecto beatae vitae 
                        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
                        sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. N
                        eque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, 
                        sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
                        Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? 
                        eque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, 
                        sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
                        Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur
                    </div>
                </div>
            </div>
            <div className='sliderContainer'>
                    <div className = 'slides'>
                        {/*Card #1 */}
                        <Image src = {BGblue} 
                            alt = "blueBG" 
                            width = {350} 
                            height = {225} 
                            quality={100} >
                        </Image>
                    </div>
                    <h2 id = 'selectTitle' className={be_Vietnam_Pro_Light.className}>CHOOSE A DAY...</h2>
                    <div className='dayButtons'>
                        <div className='set1'>
                            <button className={be_Vietnam_Pro.className}>#1</button>
                            <button className={be_Vietnam_Pro.className}>#2</button>
                            <button className={be_Vietnam_Pro.className}>#3</button>
                            <button className={be_Vietnam_Pro.className}>#4</button>
                            <button className={be_Vietnam_Pro.className}>#5</button>
                            <button className={be_Vietnam_Pro.className}>#6</button>
                            <button className={be_Vietnam_Pro.className}>#7</button>
                        </div>
                        <div className='set2'>
                            <button className={be_Vietnam_Pro.className} >#8</button>
                            <button className={be_Vietnam_Pro.className}>#9</button>
                            <button className={be_Vietnam_Pro.className}>#10</button>
                            <button className={be_Vietnam_Pro.className}>#11</button>
                            <button className={be_Vietnam_Pro.className}>#12</button>
                            <button className={be_Vietnam_Pro.className}>#13</button>
                            <button className={be_Vietnam_Pro.className}>#14</button>
                            
                        </div>
                        <div className='set3'>
                            <button className={be_Vietnam_Pro.className}>#15</button>
                            <button className={be_Vietnam_Pro.className}>#16</button>
                            <button className={be_Vietnam_Pro.className}>#17</button>
                            <button className={be_Vietnam_Pro.className}>#18</button>
                            <button className={be_Vietnam_Pro.className}>#19</button>
                            <button className={be_Vietnam_Pro.className}>#20</button>
                            <button className={be_Vietnam_Pro.className}>#21</button>
                        </div>
                </div>
            </div>
        </div>
            
    );
}