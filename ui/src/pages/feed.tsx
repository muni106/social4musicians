import React from 'react';
import logo from '../assets/images/logo-db.png';
import '../assets/css/landing.css';

function Feed() {
  return (
    <div className="LandingBody">
      <img src={logo} id="logoLandingPage" alt="logo" />
      <main>
        <h1>Welcome to 4Musician</h1>
        <section>
          <h2>Join us</h2>
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

export default Feed;