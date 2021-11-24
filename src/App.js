import React from 'react';
//Import -> component
import ContactPage from './Components/ContactPageMain';
//Import -> React-router-dom for routing
import { Routes, Route } from 'react-router-dom';
import AddContact from './Components/SubComponents/AddContact';
import EditContact from './Components/EditContact';
export default function App() {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<ContactPage/>} />
                <Route path="/addContact" element={<AddContact/>} />
                <Route path="/editContact" element={<EditContact/>} />
            </Routes>
        </>
    )
}