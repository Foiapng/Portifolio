import './styles/Header.css'
import { Link } from "react-router-dom";

function Header() {

 return(   
    <section className='NavBar'>
        <ul className='NavBar__Links'>
            <li>
            <Link to="/" className='Navbar__Btn' >| HOME |</Link>
            </li>

            <li>
            <Link to="/SobreMim" className='Navbar__Btn' >| SOBRE MIM |</Link>
            </li>

            <li>
            <Link to="/WebDesign" className='Navbar__Btn' >| WEB DESIGN |</Link>
            </li>

            <li>
            <Link to="/Games" className='Navbar__Btn' >| GAMES |</Link>
            </li>
        </ul>
    </section>
 );
}

export default Header;