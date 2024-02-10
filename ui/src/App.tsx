import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landingPage';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Feed from './pages/feed';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' Component={LandingPage} />
          <Route path='/signin' Component={SignIn} />
          <Route path='/signup' Component={SignUp} />
          <Route path='/feed' Component={Feed} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
