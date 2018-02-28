import React from 'react';

class SiteBody extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default SiteBody;
