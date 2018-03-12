import React from 'react';
import PropTypes from 'prop-types';
import { SPOTIFY_URL } from '../../apis/SpotifyAPI';

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
