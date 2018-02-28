import React from 'react';
import Login from '../auth/Login';

class SiteHeader extends React.Component {
  render() {
    return (
      <div className="site-header">
        <Login />
      </div>
    )
  }
}

export default SiteHeader;
