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

function App() {
    const navigationContacts = [
        {id: 1, type: 'email', icon: 'bi bi-envelope', value: 'info@pandolfoepianoexpress.it'},
        {id: 2, type: 'phone', icon: 'bi bi-telephone-forward', value: '3356024293', info: 'Tiziano'},
        {id: 3, type: 'phone', icon: 'bi bi-telephone-forward', value: '3460903094', info: 'Adriano'}
    ]

    return (
        <div className="App" onScroll={event => console.log(event)}>
            <BrowserRouter>
                <Navigation contacts={navigationContacts}/>
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/contatti' element={<Contact />}/>
                    <Route path='/richiedi-preventivo' element={<Quote />}/>
                    <Route path='/servizi' element={<Service />}/>
                    <Route path='/chi-siamo' element={<About />}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
