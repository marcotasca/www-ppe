
import {NavigationContacts} from "../../interface/NavigationContacts";
import {Link} from "react-router-dom";

function NavigationContact(props: { contacts: NavigationContacts[] }) {
    const contacts = props.contacts;
    return (
        <div className='Contact'>
            <div className='d-none d-lg-block'><NavigationContactDesktop contacts={contacts}/></div>
            <div className='d-lg-none d-sm-block'><NavigationContactMobile/></div>
        </div>
    );
}

function NavigationContactDesktop(props: { contacts: NavigationContacts[] }) {
    const contacts = props.contacts;
    return (
        <div className="container">
            <div className="row">
                {
                    contacts.map((contact) =>
                        <div key={contact.id} className="col col-12 col-md-4">
                            <i className={contact.icon}/>
                            <span className='contactInfo'>{contact.info ? contact.info : ''}</span>
                            <a href={`${contact.type === 'email' ? 'mailto' : 'tel'}:${contact.value}`}><b>{contact.value}</b></a>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

function NavigationContactMobile() {
    return (
        <Link id='goToContacts' to="/contatti">Contatti <i className="bi bi-arrow-right-short"/></Link>
    );
}

export default NavigationContact;
