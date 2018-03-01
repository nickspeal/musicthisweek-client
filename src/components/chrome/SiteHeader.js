import React from 'react';
import PropTypes from 'prop-types';
import Login from '../auth/Login';
import Profile from '../auth/Profile';

class SiteHeader extends React.Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
  }

  render() {
    return (
      <div className="site-header">
        {this.props.isLoggedIn ? <Profile /> : <Login />}
      </div>
    )
  }
}

export default SiteHeader;
