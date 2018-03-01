import React from 'react';
import SiteHeader from './chrome/SiteHeader';
import LoginCheck from './auth/LoginCheck';
import Home from './home/Home';
import About from './home/About';

const Main = () => (
  <LoginCheck>
    { isLoggedIn => ([
      <SiteHeader isLoggedIn={isLoggedIn} key="1"/>,
      isLoggedIn ? (
        <Home key="2"/>
      ) : (
        <About isLoggedIn={isLoggedIn} key="3"/>
      ),
    ])}
  </LoginCheck>
)

export default Main;
