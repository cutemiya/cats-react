import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./Header";
import Catalog from "./Catalog";
import Favourites from "./Favourites";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div className="main__container">
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Catalog />}/>
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/favourites" element={<Favourites />} />
            </Routes>
        </BrowserRouter>
    </div>
);
