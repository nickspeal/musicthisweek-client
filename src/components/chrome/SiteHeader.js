import React from 'react';
import PropTypes from 'prop-types';
import Profile from '../auth/Profile';
import { Navbar, NavbarBrand } from 'reactstrap';
import LoginCheck from '../auth/LoginCheck';

class SiteHeader extends React.Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
  }

  render() {
    return (
      <Navbar dark color="black" fixed="top" className="site-header">
        <NavbarBrand href="/">Discover Live</NavbarBrand>
        <LoginCheck>
          { isLoggedIn => isLoggedIn && <Profile />}
        </LoginCheck>
      </Navbar>
    )
  }
}

export default SiteHeader;
