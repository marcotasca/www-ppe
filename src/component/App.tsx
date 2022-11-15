import React from 'react';
import './App.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navigation from "./menu/Navigation";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import Quote from "./pages/quote/Quote";
import Service from "./pages/service/Service";
import About from "./pages/about/About";
import {RoutePathEnum} from "../enum/RoutePathEnum";

function App() {
    const navigationContacts = [
        {id: 1, type: 'email', icon: 'bi bi-envelope', value: 'info@pandolfoepianoexpress.it'},
        {id: 2, type: 'phone', icon: 'bi bi-telephone-forward', value: '3356024293', info: 'Tiziano'},
        {id: 3, type: 'phone', icon: 'bi bi-telephone-forward', value: '3460903094', info: 'Adriano'}
    ];

    const navigationItems = [
        {id: 1, path: RoutePathEnum.Home, displayName: 'Home', element: <Home />},
        {id: 2, path: RoutePathEnum.About, displayName: 'Chi siamo', element: <About />},
        {id: 3, path: RoutePathEnum.Service, displayName: 'Servizi', element: <Service />},
        {id: 4, path: RoutePathEnum.Contact, displayName: 'Contatti', element: <Contact />},
        {id: 5, path: RoutePathEnum.Quote, displayName: 'Richiedi preventivo', element: <Quote />, uiID: 'requestQuote', uiClass: 'btn btn-light'},
    ]

    return (
        <div className="App">
            <BrowserRouter>
                <Navigation contacts={navigationContacts} navbarItems={navigationItems}/>
                <Routes>
                    {navigationItems.map((item) =>
                        <Route key={item.id} path={item.path} element={item.element}/>
                    )}
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
