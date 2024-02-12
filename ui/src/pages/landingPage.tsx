import React from 'react';
import logo from '../assets/images/logo-db.png';
import Button from 'react-bootstrap/Button'
import '../assets/css/landing.css';


function LandingPage() {
  return (
    <div className="LandingBody">
      <img src={logo} id="logoLandingPage" alt="logo" />
      <main>
        <h1>Welcome to 4Musician</h1>
        <section>
          <h2>Join us</h2>
          <a href="/signup" className="button">
            <Button>Register</Button>
          </a>
        </section>
        <section>
          <h2>welcome back</h2>
          <a href="/signin" className="button mb-3">
            <Button className='btn'>Login</Button>
          </a>
        </section>
      </main>
    </div>
  );
}

export default LandingPage;