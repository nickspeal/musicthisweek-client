import React from 'react';
import { Container, Row } from 'reactstrap';
// import PropTypes from 'prop-types';
import Login from '../auth/Login';
import LoginCheck from '../auth/LoginCheck';
import SiteChrome from '../chrome/SiteChrome';
import BackgroundGradient from '../chrome/BackgroundGradient';
import { Link } from 'react-router-dom';


const About = () => (
  <SiteChrome>
    <BackgroundGradient>
      <Container className="hero-center">
      <h1>DISCOVER SOMETHING NEW</h1>
      <p>Discover Live. Generate a playlist of bands playing near you this week. If you hear something you like, check out the show!</p>
      <LoginCheck>
        { isLoggedIn => isLoggedIn ? (
          <Link to="/search">
            <button onClick>Create Your Playlist</button>
          </Link>
        ) : (
          <Login>
            <button>Sign In With Spotify</button>
          </Login>
        )}
      </LoginCheck>
      </Container>
    </BackgroundGradient>

    <div style={{ background: 'white', color: 'black' }}>
      <Container>
        <Row>
          <h2>About Discover Live</h2>
          <p>
            Have you ever felt the urge to go see a concert this weekend but you’re not sure who’s playing? Ever looked at the concert listings to see a hundred names of bands you haven’t heard of yet? How do you know who you’d like?
          </p>
          <p>
            Discover Live is a music discovery service that creates a Spotify playlist with bands that are playing near you this week. Throw this playlist on while you’re in the car or eating breakfast or otherwise down to listen to music but don’t have something specific in mind. You’ll probably end up skipping a bunch of random songs you don’t care about, and you’ll listen to some generic music with neutral opinion, but if you find even one new band that absolutely rocks, wouldn’t it be cool to see their show on Friday?
          </p>
        </Row>
      </Container>
    </div>

    <BackgroundGradient>
      <Container>
        <Row>
        <h2>Features</h2>
        <ul>
          <li>Up-to-date concert listings from Eventful</li>
          <li>Background playlist creation</li>
          <li>Mobile-optimized design</li>
          <li>Open Source - Find the source code for the <a href="https://github.com/nickspeal/musicThisWeek-client/" target="_blank" noopener noreferrer>React Frontend</a> and <a href="https://github.com/nickspeal/musicThisWeek/" target="_blank" noopener noreferrer>Django Backend</a> on Github</li>
        </ul>
        </Row>
        </Container>
    </BackgroundGradient>
  </SiteChrome>
)

export default About;
