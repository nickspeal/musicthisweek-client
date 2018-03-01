import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class LoginCheck extends React.Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
    token: PropTypes.string,
  }

  static defaultProps = {
    token: undefined,
  }

  componentWillMount() {
    // TODO make a Spotify request here and verify that it works before setting this to true.
    this.isLoggedIn = !!this.props.token;
  }

  componentWillReceiveProps(nextProps) {
    this.isLoggedIn = !!nextProps.token;
  }

  render() {
    return this.props.children(this.isLoggedIn);
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.spotify_token
  }
}

export default connect(mapStateToProps)(LoginCheck);
