import React from 'react';
import logo from '../assets/images/logo-db.png';
import '../assets/css/landing.css';
import Header from '../components/header';
import UserProfile from '../helpers/userProfile';
import AllPosts from '../components/feedPosts';
import SideLeft from '../components/sideLeft';
import SideRight from '../components/sideRight';

function Feed() {
  let user = UserProfile.getName();
  return (
    <div className="feedBody">
        <h1>{user}</h1>
        <Header/>
        <div className='content'>
          <SideLeft/>
          <main>
           <AllPosts/>
          </main>
          <SideRight/>

        </div>
    </div>
  );
}

export default Feed;