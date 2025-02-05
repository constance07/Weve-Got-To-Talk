import '../globals.css';
import Link from 'next/link';

export default function Navigation(){
    return(
        <>
        {/*Navigation Bar*/}
            <nav className="navContainer">
                <ul>
                    <li><Link href ="/">HOME</Link></li>
                    <li><Link href ='/directory/journal'>JOURNAL</Link></li>
                    <li><Link href ="..">PURPOSE</Link></li>
                    <li><Link href ="..">CONTACT</Link></li>
                </ul>
            </nav>
        </>
    )
};