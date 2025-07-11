'use client';
import {useState} from "react";

import '../globals.css';

{/* Fonts */}
import { Be_Vietnam_Pro} from 'next/font/google';
{/*VBold*/}const be_Vietnam_Pro = Be_Vietnam_Pro({subsets: ['latin'], weight: '800'})
{/*Light*/}const be_Vietnam_Pro_Light = Be_Vietnam_Pro({subsets: ['latin'], weight: '300'})
{/*VLight*/}const be_Vietnam_Pro_VLight = Be_Vietnam_Pro({subsets: ['latin'], weight: '200'})

{/*General Imports*/}
import { ToastContainer, toast } from 'react-toastify';



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
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    {/*Send to personal Email*/}
    const handleSubmit = async(event) => {
        {/*Dont let field be empty*/}
        event.preventDefault();

        {/* Grab HTML Elements */}
        const nameError = document.getElementById("nameError");
        const emailError = document.getElementById("emailError");
        const messageError = document.getElementById("messageError");

        {/*Valid Email*/}
        const emailErrorB = document.getElementById("inputB"); 
        const validEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/; 

        if(!formData.name || !emailErrorB.value.match(validEmail) || !formData.message){
            {/*If field is not valid, add error */}
            if(!formData.name) {nameError.innerHTML = "* Please insert your name"};
            if(!emailErrorB.value.match(validEmail)){emailError.innerHTML = "* Please insert a valid email"}
            if(!formData.message){ messageError.innerHTML = "* Please type your message"};

            {/*If field is now valid, remove error */}
            if(formData.name) {nameError.innerHTML = ""};
            if(emailErrorB.value.match(validEmail)){emailError.innerHTML = ""};
            if(formData.message){messageError.innerHTML = ""};

            toast.error('Please check all input fields.');
            return false;
        }

        {/*Make sure all errors are removed*/}
        nameError.innerHTML = "";
        emailError.innerHTML = "";
        messageError.innerHTML = "";

        try{
            const response = await fetch('/api/send', {
                method: 'POST',
                body: JSON.stringify({...formData}),
            });
        {/*Email Sent !*/}
            setFormData(initialFormData);
            toast.success("Email was sent sucessfully!");
        } catch(error){
        {/*Email Error !*/}
            toast.error('Oops, looks like something went wrong: ', error);
        } 
    };
    
    return(
        <>
            <div className='contactContainer'>
                {/*Title*/}
                <div className='contactTitle'>
                    <div className= {be_Vietnam_Pro.className}>
                        <h1>LET'S CONNECT</h1>
                    </div>
                </div>
                {/*Sub-Title*/}
                <div className ='contactSubTitle'>
                    <div className={be_Vietnam_Pro_VLight.className}>
                        Ask me anything, or just say hi... 
                    </div>
                </div>

                {/*Form*/}
                <div className = "formBackground">
                    <form name = "conctactForm" onSubmit = {handleSubmit} className='form' >
                        <fieldset className='formField'>
                            <h2 className='formSubTitles'>NAME</h2>
                            <div className = {be_Vietnam_Pro_VLight.className} id = "nameError"></div>
                                <input 
                                className= {be_Vietnam_Pro_VLight.className} 
                                id='inputA' 
                                type = 'text'
                                name = 'name'
                                value = {formData.name}
                                onChange={handleChange}/>
                            <h2 className='formSubTitles'>E-MAIL</h2>
                            <div className = {be_Vietnam_Pro_VLight.className} id = "emailError"></div>
                                <input  
                                className= {be_Vietnam_Pro_VLight.className} 
                                id='inputB'
                                type = 'text' 
                                name = 'email'
                                value = {formData.email} 
                                onChange={handleChange}/>
                            <h2 className='formSubTitles'>MESSAGE</h2>
                            <div className = {be_Vietnam_Pro_VLight.className} id = "messageError"></div>
                            <textarea  
                                className= {be_Vietnam_Pro_VLight.className} 
                                id='textArea' 
                                name = 'message' 
                                value = {formData.message} 
                                onChange={handleChange}>
                            </textarea>
                        </fieldset>
                            <button id = "submit" className={be_Vietnam_Pro.className}>
                               SEND
                            </button>
                            <div className= {be_Vietnam_Pro_VLight.className} >
                                <ToastContainer/>
                            </div >
                    </form>
                </div>
            </div>
        </>
    )
}