import React from 'react';
import logo from '../assets/images/logo-db.png';
import '../assets/css/landing.css';
import {serverTry} from '../client';

function LandingPage() {
  let hello = serverTry();
  return (
    <div className="LandingBody">
      <img src={logo} id="logoLandingPage" alt="logo" />
      <main>
        <h1>Welcome to 4Musician</h1>
        <section>
          <h2>Join us ${hello}</h2>
          <a href="/signup" className="button">Subscribe</a>
        </section>
        <section>
          <h2>welcome back</h2>
          <a href="/signin" className="button">Login</a>
        </section>
      </main>
    </div>
  );
}

export default LandingPage;