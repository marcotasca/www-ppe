
import NavigationContact from "./NavigationContact";
import {NavigationContactInterface} from "../../interface/NavigationContactInterface";
import Navbar from "./Navbar";

function Navigation(props: { contacts: NavigationContactInterface[]; }) {
    const contacts = props.contacts;
    return (
        <header className="Navigation">
            <NavigationContact contacts={contacts}/>
            <Navbar/>
        </header>
    );
}

export default Navigation;
