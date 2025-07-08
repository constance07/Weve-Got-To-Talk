'use client';
import {useState} from "react";

import '../globals.css'
{/* Fonts */}
import { Be_Vietnam_Pro} from 'next/font/google';
{/*VBold*/}const be_Vietnam_Pro = Be_Vietnam_Pro({subsets: ['latin'], weight: '800'})
{/*Light*/}const be_Vietnam_Pro_Light = Be_Vietnam_Pro({subsets: ['latin'], weight: '300'})
{/*VLight*/}const be_Vietnam_Pro_VLight = Be_Vietnam_Pro({subsets: ['latin'], weight: '200'})
{/*General Imports*/}

export default function Email(){

    {/*Empty Form*/}
    const initialFormData = {
        name: "",
        email: "",
        message: "",
    };

    const [formData, setFormData] = useState(initialFormData);
    
    {/*Update Input Value*/}
    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value});
    }

    {/*Send to personal Email*/}
    const handleSubmit = async(event) => {
        {/*Check if field is empty */}
        event.preventDefault();
        if(!formData.name || !formData.email || !formData.message) return;

        try{
            const response = await fetch('/api/send', {
                method: 'POST',
                body: JSON.stringify({...formData}),
            });
        } catch(error){}
    };
    
    return(
        <>
            <div className='contactContainer'>
                {/*Title*/}
                <div className='contactTitle'>
                    <div className= {be_Vietnam_Pro.className}>
                        <h1><center>LET'S CONNECT</center></h1>
                    </div>
                </div>
                {/*Sub-Title*/}
                <div className ='contactSubTitle'>
                    <div className={be_Vietnam_Pro_VLight.className}>
                        <center>Ask me anything, or just say hi... </center>
                    </div>
                </div>
                {/*Form*/}
                <div className = "formBackground">
                    <form onSubmit = {handleSubmit} className='form' >
                        <fieldset className='formField'>
                            <h2 className='formSubTitles'>NAME</h2>
                                <input className= {be_Vietnam_Pro_VLight.className} id='input' type = 'text' name = 'name'placeholder='name' value = {formData.name} onChange={handleChange}/>
                            <h2 className='formSubTitles'>E-MAIL</h2>
                                <input  className= {be_Vietnam_Pro_VLight.className} id='input'type = 'text' name = 'email'placeholder='email' value = {formData.email} onChange={handleChange}/>
                            <h2 className='formSubTitles'>MESSAGE</h2>
                            <textarea  className= {be_Vietnam_Pro_VLight.className} id='textArea' placeholder='message' name = 'message' value = {formData.message} onChange={handleChange}></textarea>
                        </fieldset>
                        <button id = "submit" className={be_Vietnam_Pro.className}>SEND</button>
                    </form>
                </div>
            </div>
        </>
    )
}