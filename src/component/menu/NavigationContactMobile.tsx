import {Link} from "react-router-dom";
import {RoutePathEnum} from "../../enum/RoutePathEnum";

function NavigationContactMobile() {
    return (
        <Link id='goToContacts' to={RoutePathEnum.Contact}>
            <span>Scopri subito il tuo preventivo!</span>
            <i className="bi bi-arrow-right-short"/>
        </Link>
    );
}

export default NavigationContactMobile;