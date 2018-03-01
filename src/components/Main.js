import React from 'react';
import SiteHeader from './chrome/SiteHeader';
import SiteBody from './chrome/SiteBody';
import SpotifyLogin from './svg/spotify_login.svg';
import Login from './auth/Login';

class Main extends React.Component {
  render = () => (
    <div>
      <SiteHeader />
      <SiteBody>
        <div className="hero top-pad">
          <h1>WELCOME TO MUSIC THIS WEEK</h1>
          <p>We generate Spotify playlist of bands that are playing in your area in the near future.</p>
          <p>If you discover music you like, check out their show!</p>
          <Login>
            <img src={SpotifyLogin} alt="Login with Spotify" width="244" height="44" />
          </Login>
        </div>
      </SiteBody>
    </div>
  )
}

export default Main;
