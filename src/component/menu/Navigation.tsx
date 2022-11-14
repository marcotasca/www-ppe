
import NavigationContact from "./NavigationContact";
import {NavigationContactInterface} from "../../interface/NavigationContactInterface";
import Navbar from "./Navbar";
import {useEffect, useState} from "react";

function Navigation(props: { contacts: NavigationContactInterface[]; }) {
    const contacts = props.contacts;
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
            windowWidth < 992 ? setStickyClass('fixed-top') : setStickyClass('');
        }
    };

    return (
        <div className={`Navigation ${stickyClass}`}>
            <NavigationContact contacts={contacts}/>
            <Navbar/>
        </div>
    );
}

export default Navigation;
