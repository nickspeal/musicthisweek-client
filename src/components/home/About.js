import React from 'react';
// import PropTypes from 'prop-types';
import SpotifyLogin from '../svg/spotify_login.svg';
import Login from '../auth/Login';


const About = () => (
  <div className="hero top-pad">
      <h1>WELCOME TO MUSIC THIS WEEK</h1>
      <p>We generate a Spotify playlist of bands that are playing in your area in the near future.</p>
      <p>If you discover music you like, check out their show!</p>
      <Login>
        <img src={SpotifyLogin} alt="Login with Spotify" width="244" height="44" />
      </Login>
  </div>
)

export default About;
