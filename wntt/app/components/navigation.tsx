import '../globals.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faBars } from '@fortawesome/free-solid-svg-icons';


export default function Navigation(){

    /* const navRef = useRef();
    const showNavBar = () =>{
        navRef.current.classList.toggle("responsive_nav");
    }
        */
const element = <FontAwesomeIcon icon ={faBars}/> 
    return(
        <>
        {/*Navigation Bar*/}
            <nav /* ref = {navRef} */ className="navContainer">
                {/*Collapsed*/}
                    <button id = "hamburgerIcon">
                        <FontAwesomeIcon icon ={faBars}/> 
                    </button>
                {/*Expanded(ON-CLICK)*/}
                <ul className = "navList">
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