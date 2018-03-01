import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SearchForm from './SearchForm';
import { post } from '../../apis/MusicThisWeekAPI';

class Home extends React.Component {
  static propTypes = {
    spotify_token: PropTypes.string.isRequired,
  }

  componentWillMount() {
    // Compute dateoffset
    // Offset end date by desired number of days
    // end.setDate(start.getDate() + 7);
  }

  handleResponse = (response) => {
    response.json().then(r => {
      console.log('Got Response: ', r);
      window.location.replace(r.playlist)
    });
  }

  onSubmit = (data) => {
    console.log('submitting data: ', data);
    const { spotify_token } = this.props;
    post('/create/', { ...data, spotify_token }).then(this.handleResponse)
  }

  render() {
    return (
      <div className="hero">
        <h3>FIND MUSIC THIS WEEK:</h3>
        <SearchForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  spotify_token: state.auth.spotify_token,
})

export default connect(mapStateToProps)(Home);
