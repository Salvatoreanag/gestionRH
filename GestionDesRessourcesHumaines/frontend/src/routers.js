import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar/navbar';
import Inscription from './Formulaires/inscription';

function Routess() {
    return (
        <Routes>
            <Route exact path="/" element={<Navbar />} />
            <Route exact path="/Inscription" element={<Inscription />} />
        </Routes>
    )
}

export default Routess