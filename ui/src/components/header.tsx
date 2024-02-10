import React from 'react';
import logo from '../assets/images/logo-db.png';
import '../assets/css/header.css'

function Header() {
    return (
        <header>
            <nav>
                <div className='logoNav'>
                    <a href="/feed">
                        <img id="navLogo" src={logo} alt="logonav" />
                        <h1>4Musician</h1>
                    </a>
                </div>
                <div id="searchBarContainer">
                    <input type="text" placeholder='      Search Discussion' name="ohio" id="searchBar" />
                </div>
                <div>
                    <button id="postHeader">
                        + Post
                    </button>
                </div>
            </nav>
        </header>
    );
}

export default Header;