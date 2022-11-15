
import NavigationContact from "./NavigationContact";
import {NavigationContactInterface} from "../../interface/NavigationContactInterface";
import Navbar from "./Navbar";
import {useEffect, useState} from "react";
import {NavigationNavbarItemInterface} from "../../interface/NavigationNavbarItemInterface";
import Carousel from "./Carousel";

function Navigation(props: { contacts: NavigationContactInterface[], navbarItems: NavigationNavbarItemInterface[] }) {
    const contacts = props.contacts;
    const navbarItems = props.navbarItems;
    const [stickyClass, setStickyClass] = useState('');

    useEffect(() => {
        window.addEventListener('load', stickNavbar);
        window.addEventListener('resize', stickNavbar);
        return () => {
            window.removeEventListener('load', stickNavbar);
            window.removeEventListener('resize', stickNavbar);
        }
    }, []);

    const stickNavbar = () => {
        if (window !== undefined) {
            let windowWidth = window.innerWidth;
            windowWidth < 992 ? setStickyClass('sticky-top') : setStickyClass('');
        }
    };

    return (
        <div className={`Navigation ${stickyClass}`}>
            <NavigationContact contacts={contacts}/>
            <Navbar navbarItems={navbarItems}/>
            <Carousel/>
        </div>
    );
}

export default Navigation;
