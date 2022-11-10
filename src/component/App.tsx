import React from 'react';
import './App.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navigation from "./menu/Navigation";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./home/Home";
import Contact from "./contact/Contact";

function App() {
    const navigationContacts = [
        {id: 1, type: 'email', icon: 'bi bi-envelope', value: 'info@pandolfoepianoexpress.it'},
        {id: 2, type: 'phone', icon: 'bi bi-telephone-forward', value: '3356024293', info: 'Tiziano'},
        {id: 3, type: 'phone', icon: 'bi bi-telephone-forward', value: '3460903094', info: 'Adriano'}
    ]

    return (
        <div className="App">
            <BrowserRouter>
                <Navigation contacts={navigationContacts}/>
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/contatti' element={<Contact />}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
