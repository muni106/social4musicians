import React from 'react';
import logo from '../assets/images/logo-db.png';
import '../assets/css/landing.css';
import Header from '../components/header';
import UserProfile from '../helpers/userProfile';
import AllPosts from '../components/feedPosts';

function Feed() {
  let userName = UserProfile.getName();
  return (
    <div className="feedBody">
        <Header/>
        <div className='content'>
           <h1>{userName}</h1> 
           <AllPosts/>
        </div>
    </div>
  );
}

export default Feed;