'use client';
{/*General Imports */}
import '../globals.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import { useScrollLock } from 'usehooks-ts'
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default function Navigation(){
    {/*State for Hamburger*/}
    const [menuOpen, setMenuOpen] = useState(false);

    {/* Disable Website Scrolling */}
   const disableScroll = () => {
    parent.document.body.classList.remove("overflowShow");
    parent.document.body.classList.add("overflowHidden");
   }
    {/* Enable Website Scrolling */}
   const enableScroll = () => {
        parent.document.body.classList.remove("overflowHidden");
        parent.document.body.classList.add("overflowShow");
   }

    return(
        
        <>
    {/*ON MOBILE*/}    
        {/*Hamburger Bar*/}
            <nav /* ref = {navRef} */ id = "navOpen" className="hamburgerContainer" >
                {/*Collapsed*/}
                <div className='hamburgerIconBackground'>
                    <div className = "hamburgerIcon" onClick={() => {
                        setMenuOpen(!menuOpen);
                        disableScroll();
                    }}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
              </div>
                {/*Expanded(ON-CLICK)*/}
                {/*Black Screen Overlay*/}
                    <ul className = {menuOpen ? "open" : ""}>
                    {/*Exit Button*/}
                        <div id = "close-Button">
                            <span id = "1x" onClick={() => {
                                setMenuOpen(!menuOpen);
                                enableScroll();
                                }}></span>
                            <span id = "2x" onClick={() => {
                                setMenuOpen(!menuOpen);
                                enableScroll();
                                }}></span>
                        </div>
                    {/*Pages*/}
                        <a className = "active-link" href ='/'><li>HOME</li></a>
                        <a className = "active-link" href ='/(1)cards'><li>CARDS</li></a>
                        <a className = "active-link" href ="/(2)purpose"><li>PURPOSE</li></a>
                        <a className = "active-link" href ="/(3)about"><li>ABOUT</li></a>
                        <a className = "active-link" href =".."><li>CONTACT</li></a>
                    </ul>    
            </nav>


    {/*ON DESKTOP*/}   
        {/*Navigation Bar*/} 
        <nav className ='navContainer'>
            <ul>
                {/*Pages*/}
                <a className = "active-link" href ='/'><li>HOME</li></a>
                <a className = "active-link" href ='/(1)cards'><li>CARDS</li></a>
                <a className = "active-link" href ="/(2)purpose"><li>PURPOSE</li></a>
                <a className = "active-link" href ="/(3)about"><li>ABOUT</li></a>
                <a className = "active-link" href =".."><li>CONTACT</li></a>
            </ul>
        </nav>  
        </>
    )
};