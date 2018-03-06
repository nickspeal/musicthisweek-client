import React from 'react';
import PropTypes from 'prop-types';

const SPOTIFY_BASE_URL = 'https://accounts.spotify.com/authorize';
const SPOTIFY_CLIENT_ID = '338af3083e4e4069960c77b6978cb7a5';
const SPOTIFY_RESPONSE_TYPE = 'token';
const SPOTIFY_REDIRECT_URI = 'http://localhost:3000/callback';
const SPOTIFY_SCOPE = 'playlist-modify-public';
const SPOTIFY_SHOW_DIALOG = 'false';
const SPOTIFY_URL = `${SPOTIFY_BASE_URL}?client_id=${SPOTIFY_CLIENT_ID}&response_type=${SPOTIFY_RESPONSE_TYPE}&redirect_uri=${SPOTIFY_REDIRECT_URI}&scope=${SPOTIFY_SCOPE}&show_dialog=${SPOTIFY_SHOW_DIALOG}`;

class Login extends React.Component {

  static propTypes = {
    children: PropTypes.node,
  }

  static defaultProps = {
    children: 'Log In',
  }

  onClick = () => {
    window.location = SPOTIFY_URL
  };

  render() {
    return (
      <div className="login" onClick={this.onClick}>
        {this.props.children}
      </div>
      )
  }
}

export default Login;
