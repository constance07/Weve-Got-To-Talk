import '../globals.css';
import NextLink from 'next/link';

export default function Navigation(){
    return(
        <>
        {/*Navigation Bar*/}
            <nav className="navContainer">
                <ul>
                    <li><NextLink href ="..">HOME</NextLink></li>
                    <li><NextLink href =''>JOURNAL</NextLink></li>
                    <li><NextLink href ="..">PURPOSE</NextLink></li>
                    <li><NextLink href ="..">CONTACT</NextLink></li>
                </ul>
            </nav>
        </>
    )
};