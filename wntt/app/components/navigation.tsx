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
                <ul className = {menuOpen ? "open" : ""}>
                    <li><Link href ="/">HOME</Link></li>
                    <li><Link href ='/journal'>JOURNAL</Link></li>
                    <li><Link href ="..">PURPOSE</Link></li>
                    <li><Link href ="..">CONTACT</Link></li>
                </ul>      
            </nav>
        </>
    )
};