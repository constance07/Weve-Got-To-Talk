//General Imports
'use client';
import '../globals.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function Navigation(){
    {/*State for Hamburger*/}
    const [menuOpen, setMenuOpen] = useState(false);
    
    return(
        <>
        {/*Navigation Bar*/}
            <nav /* ref = {navRef} */ className="navContainer">
                {/*Collapsed*/}
                    <div className = "hamburgerIcon" onClick={() => {
                        setMenuOpen(!menuOpen);
                    }}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                {/*Expanded(ON-CLICK)*/}
                {/*Black Screen Overlay*/}
                <div id = "Overlay" className = {menuOpen ? "open" : ""}>
                    <ul className = {menuOpen ? "open" : ""}>
                    {/*Exit Button*/}
                        <div className = "close-Button">
                            <span id = "1x" onClick={() => {setMenuOpen(!menuOpen);}}>
                        </span>
                            <span id = "2x" onClick={() => {setMenuOpen(!menuOpen);}}></span>
                        </div>
                    {/*Pages*/}
                        <li><a className = "active-link" href ="/">HOME</a></li>
                        <li><a className = "active-link" href ='/journal'>JOURNAL</a></li>
                        <li><a className = "active-link" href ="..">PURPOSE</a></li>
                        <li><a className = "active-link" href ="..">CONTACT</a></li>
                    </ul>  
                </div>     
            </nav>
        </>
    )
};