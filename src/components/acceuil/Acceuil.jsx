import React from 'react';
import './../acceuil/Acceuil.css';
import { Routes, Route } from 'react-router-dom';
import ListUser from './../ListUser/ListUser';
import DetailUser from './../DetailUser/DetailUser';
import ListPosts from './../ListPosts/ListPosts';

export default function Accueil() {
    return (
        <div>
            <div className='Head'>Gestion des posts</div><br />
            <h1>Liste des utilisqteurs:</h1><br />
            <Routes>
                <Route exact path="/" element={<ListUser />} />
                <Route path='/DetailUser/:id' element={<DetailUser />} />
                <Route path='/ListPosts/:id' element={<ListPosts/>} />
            </Routes>
        </div>
    )
}
