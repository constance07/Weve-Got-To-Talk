//General Imports
'use client';
import '../globals.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import { useScrollLock } from 'usehooks-ts'

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
        {/*Navigation Bar*/}
            <nav /* ref = {navRef} */ id = "navOpen" className="navContainer" >
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
                <div id = "Overlay" className = {menuOpen ? "open" : ""}>
                    <ul id = "menu" className = {menuOpen ? "open" : ""}>
                    {/*Exit Button*/}
                        <div className = "close-Button">
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
                        <li><a className = "active-link" href ="/">HOME</a></li>
                        <li><a className = "active-link" href ='/(1)cards'>CARDS</a></li>
                        <li><a className = "active-link" href ="/(2)purpose">PURPOSE</a></li>
                        <li><a className = "active-link" href ="..">CONTACT</a></li>
                    </ul>  
                    </div>    
            </nav>
        </>
    )
};