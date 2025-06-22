'use client';
import '../globals.css'
import '../(3)about/local.css';
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
                <Image src = {bwCandyStore}  width = {380} height = {80} alt = 'Picture of Website Creator' quality={100} className = 'imageContainer'></Image>
                {/*Box --> a.k.a actual disc lol*/}
                <div className = "personalContainer">
                    <div id = "allWords" className ={be_Vietnam_Pro_Light.className}>
                        <h1 id = "introWord">Hey :)</h1> I'm the creator of WNTT. Nunc non tellus eleifend, varius odio at, elementum sapien. 
                        Etiam mollis consectetur lacus, vel condimentum mi sollicitudin at. 
                        Curabitur dignissim, felis rutrum rhoncus aliquam, lorem lorem laoreet nulla, et porta risus diam non 
                        urna. Curabitur dignissim mi ac fringilla pharetra. Integer faucibus augue eget faucibus egestas. 
                        Mauris ut ipsum non augue semper aliquam id nec felis. Vestibulum at erat quis elit molestie facilisis. Nulla facilisi.
                        Praesent ut elit quis magna interdum commodo. Morbi hendrerit, ligula consequat facilisis varius, nisl arcu viverra ante, 
                        non varius orci quam placerat justo.Donec at neque fermentum, lobortis odio non, tempor justo. 
                        Morbi pretium ultricies magna ut vehicula.Sed ultricies sed neque ac efficitur. Nullam viverra ex ac neque sodales efficitur. 
                        Maecenas justo dui, lobortis quis sagittis nec, aliquet id nibh.
                        </div>
                </div>
            </div>
        </>
    )
}