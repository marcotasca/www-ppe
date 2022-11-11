import {NavigationContactInterface} from "../../interface/NavigationContactInterface";
import NavigationContactDesktop from "./NavigationContactDesktop";
import NavigationContactMobile from "./NavigationContactMobile";

function NavigationContact(props: { contacts: NavigationContactInterface[] }) {
    const contacts = props.contacts;
    return (
        <div className='contacts'>
            <div className='d-none d-md-block'><NavigationContactDesktop contacts={contacts}/></div>
            <div className='d-md-none d-sm-block'><NavigationContactMobile/></div>
        </div>
    );
}

export default NavigationContact;
