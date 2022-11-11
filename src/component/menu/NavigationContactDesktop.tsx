import {NavigationContactInterface} from "../../interface/NavigationContactInterface";

function NavigationContactDesktopItem(props : {contact : NavigationContactInterface}) {
    const contact = props.contact;
    let spanInfo;
    if(contact.info) {spanInfo = <span className='contactInfo'>{contact.info}</span>}
    return (
        <div className="col contactItem">
            <i className={contact.icon}/>
            {spanInfo}
            <a href={`${contact.type === 'email' ? 'mailto' : 'tel'}:${contact.value}`}>{contact.value}</a>
        </div>
    );
}

function NavigationContactDesktop(props: { contacts: NavigationContactInterface[] }) {
    const contacts = props.contacts;
    return (
        <div className='container-fluid'>
            <div>
                <div className='row'>
                    <div className='col-lg-12 col-xl-8 p-0'>
                        <div className='row row-cols-xl-auto'>
                            {
                                contacts.map((contact) =>
                                    <NavigationContactDesktopItem key={contact.id} contact={contact} />
                                )
                            }
                        </div>
                    </div>
                    <div className='col-4 d-none d-xl-block text-end contactItem time'>
                        <i className="bi bi-clock" />
                        <span>Lun-Ven: 9-12 / 15-18</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavigationContactDesktop;