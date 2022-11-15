import {useEffect, useState} from "react";
import {Link, NavLink} from "react-router-dom";
import {RoutePathEnum} from "../../enum/RoutePathEnum";
import {NavigationNavbarItemInterface} from "../../interface/NavigationNavbarItemInterface";

function NavbarItem(props : {path: string, displayName: string, uiID?: string, uiClass?: string}) {
    const path = props.path;
    const displayName = props.displayName;
    const uiID = props.uiID;
    const uiClass = props.uiClass;

    const onClickNavbarLink = () => {
        if (window !== undefined) {
            let windowWidth = window.innerWidth;
            if(windowWidth < 992) {
                let button = document.getElementById('navbar-menu-button');
                button?.click();
            }
        }
    };

    return (
        <li className="nav-item">
            <NavLink to={path} className={`nav-link ${uiClass}`} onClick={onClickNavbarLink} id={uiID} aria-current='page'>{displayName}</NavLink>
        </li>
    )
}

function Navbar(props : {navbarItems : NavigationNavbarItemInterface[];}) {
    const navbarItems = props.navbarItems;
    const [stickyClass, setStickyClass] = useState('');

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

    const onClickButtonMenu = () => {
        document.querySelector('.wrapper-menu')?.classList.toggle('open');
    }

    return (
        <nav className={`navbar bg-light navbar-expand-lg ${stickyClass}`}>
            <div className="container-fluid">

                {/* Logo immagine e scritta */}
                <Link className="navbar-brand" to={RoutePathEnum.Home}>
                    <span>Pandolfo</span>
                    <span className='color'>e</span>
                    <span>Piano</span>
                    <span className='color'>Express</span>
                </Link>

                {/* Menu Button */}
                <div className="wrapper-menu d-flex d-lg-none" onClick={onClickButtonMenu} id='navbar-menu-button' data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <div className="line-menu half start"/>
                    <div className="line-menu"/>
                    <div className="line-menu half end"/>
                </div>

                {/* Menu Item */}
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        {navbarItems.map((navbarItem) =>
                            <NavbarItem
                                key={navbarItem.id}
                                path={navbarItem.path}
                                displayName={navbarItem.displayName}
                                uiID={navbarItem.uiID}
                                uiClass={navbarItem.uiClass}
                            />
                        )}
                    </ul>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;