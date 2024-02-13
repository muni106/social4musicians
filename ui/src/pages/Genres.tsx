import React from 'react';
import logo from '../assets/images/logo-db.png';
import '../assets/css/landing.css';
import Header from '../components/header';
import Genrello from '../components/Genre';
import SideLeft from '../components/sideLeft';
import SideRight from '../components/sideRight';

function Genres() {
  return (
    <div className="feedBody">
        <Header/>
        <div className='content'>
           <SideLeft/>
           <main>
            <Genrello/>
            </main> 
            <SideRight/>
        </div>
    </div>
  );
}

export default Genres;