import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeToken } from '../../actions/authActions';

class Profile extends Component {

  onClick = () => {
    this.props.removeToken();
  }

  render() {
    return (
      <div className="login" onClick={this.onClick}>Log Out</div>
    );
  }

}

export default connect(null, { removeToken })(Profile);

// <h1>Welcome, {{ display_name }}!</h1>
// <div>
//   <img src="{{ profile_photo }}" alt="User Profile Photo for {{ username }}" />
// </div>
// <div class="profile-links">
//   <a href="{{ profile }}" target="_blank">{{ username }}</a>
//   <a href="/login/?retry=true">Switch Users</a>
// </div>
