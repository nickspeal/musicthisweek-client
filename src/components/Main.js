import React from 'react';
import SiteHeader from './chrome/SiteHeader';
import LoginCheck from './auth/LoginCheck';
import Home from './home/Home';
import About from './home/About';
import BackgroundGradient from './chrome/BackgroundGradient';

const Main = () => (
  <LoginCheck>
    { isLoggedIn => (
      <BackgroundGradient>
        <SiteHeader isLoggedIn={isLoggedIn} key="1"/>
        {isLoggedIn ? (
          <Home key="2"/>
        ) : (
          <About isLoggedIn={isLoggedIn} key="3"/>
        )}
      </BackgroundGradient>
    )}
  </LoginCheck>
)

export default Main;
