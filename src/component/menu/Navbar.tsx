import {useEffect, useState} from "react";
import {Link, NavLink} from "react-router-dom";

function Navbar() {
    const [stickyClass, setStickyClass] = useState('');
    const [menuButtonOpenClass, setMenuButtonOpenClass] = useState('')

    useEffect(() => {
        window.addEventListener('scroll', stickNavbar);
        return () => window.removeEventListener('scroll', stickNavbar);
    }, []);

    const stickNavbar = () => {
        if (window !== undefined) {
            let windowHeight = window.scrollY;
            let windowWidth = window.innerWidth;
            windowHeight > 50 && windowWidth >= 992 ? setStickyClass('fixed-top') : setStickyClass('');
        }
    };

    useEffect(() => {
        let buttons = document.getElementsByClassName('nav-link');
        if(buttons != null) {
            Array.from(buttons).forEach(function (element) {
                element.addEventListener('click', navbarMenuButton);
            })
        }
        return () => {
            let buttons = document.getElementsByClassName('nav-link');
            if(buttons != null) {
                Array.from(buttons).forEach(function (element) {
                    element.removeEventListener('click', navbarMenuButton);
                })
            }
        }
    }, []);

    const navbarMenuButton = () => {
        let button = document.getElementById('navbar-menu-button');
        button?.click();
    };

    return (
        <nav className={`navbar bg-light navbar-expand-lg ${stickyClass}`}>
            <div className="container-fluid">

                {/* Logo immagine e scritta */}
                <Link className="navbar-brand" to="/">
                    Pandolfo<span style={{color:"#ef6c00"}}>e</span>Piano<span style={{color:"#ef6c00"}}>express</span>
                </Link>

                {/* Bottone per aprire il menu */}
                <button id='navbar-menu-button' className={`navbar-toggler ${menuButtonOpenClass}`} type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>

                {/* Menu che si apre per la navbar chiusa */}
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to='/' className='nav-link' aria-current='page'>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/chi-siamo' className='nav-link' aria-current='page'>Chi siamo</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/servizi' className='nav-link' aria-current='page'>Servizi</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/contatti' className='nav-link' aria-current='page'>Contatti</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/richiedi-preventivo' id='requestQuote' className='nav-link btn btn-light' aria-current='page'>Richiedi preventivo</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;