'use client';
import '../globals.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function Navigation(){

{/*State Management for Event: On-Click*/}
    const [isActive, setIsActive] = useState(false);
    const showNavBar = () => {
        setIsActive(!isActive);
    };
    const closeNavBar = () => {
        setIsActive(false)
    }

{/*Hamburger Icon*/} 
const element = <FontAwesomeIcon icon ={faBars}/>

    return(
        <>
        {/*Navigation Bar*/}
            <nav /* ref = {navRef} */ className="navContainer">
                {/*Collapsed*/}
                    <button id = "hamburgerIcon" >
                        <FontAwesomeIcon icon ={faBars}/> 
                    </button>
                {/*Expanded(ON-CLICK)*/}
                <ul className = "navList" >
                    <li><Link href ="/">HOME</Link></li>
                    <li><Link href ='/directory/journal'>JOURNAL</Link></li>
                    <li><Link href ="..">PURPOSE</Link></li>
                    <li><Link href ="..">CONTACT</Link></li>
                    <button id = "exitButton">
                        EXIT
                    </button>
                </ul>      
            </nav>
        </>
    )
};