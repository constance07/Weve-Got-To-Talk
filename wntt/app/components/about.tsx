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
                    <h1>BE HONEST</h1>
                </div>
            </div>
            {/*About Sub-Title*/}
            <div className='aboutSubTitle'>
                <div className= {be_Vietnam_Pro_Light.className}>
                    How much do you really know yourself?
                </div>
            </div>
            {/*About Description*/}
            <div className='aboutDisc'>
                <div className= {be_Vietnam_Pro_Light.className}>
                Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer nec ipsum sit amet dolor aliquam condimentum at in lectus. 
                Mauris fringilla urna mi, eget pulvinar ex tincidunt sit amet. Suspendisse mattis consectetur turpis, eget egestas turpis mattis vel. 
                Vestibulum sagittis turpis sed sem consectetur, sed gravida quam fringilla. Mauris libero risus, commodo fermentum dapibus id, dignissim ut erat. 
                Nunc vitae justo orci. Donec pretium turpis ante, id sagittis arcu imperdiet eget. Morbi lacinia tellus eu justo mattis, eu rutrum odio vehicula.
                </div>
            </div>
        </div>
    )
}