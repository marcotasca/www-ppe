
import NavigationContact from "./NavigationContact";
import {NavigationContacts} from "../../interface/NavigationContacts";
import {Link} from "react-router-dom";

function Navigation(props: { contacts: NavigationContacts[]; }) {
    const contacts = props.contacts;
    return (
        <div className="Navigation">

            <NavigationContact contacts={contacts}/>

            <nav className="navbar bg-light navbar-expand-md">
                <div className="container-fluid">

                    {/* Logo immagine e scritta */}
                    <a className="navbar-brand" href="#">
                        {/**<img src="https://www.pandolfoepianoexpress.it/wp-content/uploads/2022/06/logo-pandolfoepianoexpress-3.png" alt="Logo" height="40"
                             className="d-inline-block align-text-top" />**/}
                        Pandolfo<span style={{color:"orange"}}>e</span>Piano<span style={{color:"orange"}}>express</span>
                    </a>

                    {/* Bottone per aprire il menu */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>

                    {/* Menu che si apre per la navbar chiusa */}
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to='/' className='nav-link active' aria-current='page'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                                <Link to='/contatti' className='nav-link' aria-current='page'>Contatti</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled">Disabled</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navigation;
