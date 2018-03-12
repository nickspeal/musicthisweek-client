import React, { Component } from 'react';
import SiteHeader from './SiteHeader';

class SiteChrome extends Component {

  render() {
    return (
      <div>
        <SiteHeader />
        {this.props.children}
      </div>
    );
  }

}

export default SiteChrome;
