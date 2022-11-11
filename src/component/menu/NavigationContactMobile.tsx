import {Link} from "react-router-dom";

function NavigationContactMobile() {
    return (
        <Link id='goToContacts' to="/contatti">
            <span>Scopri subito il tuo preventivo</span>
            <i className="bi bi-arrow-right-short"/>
        </Link>
    );
}

export default NavigationContactMobile;