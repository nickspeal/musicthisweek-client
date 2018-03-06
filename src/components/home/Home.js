import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SearchForm from './SearchForm';
import Playlist from './Playlist';
import { post } from '../../apis/MusicThisWeekAPI';

class Home extends React.Component {
  static propTypes = {
    spotify_token: PropTypes.string.isRequired,
  }

  state = {
    playlist: undefined,
  };

  componentWillMount() {
    // Compute dateoffset
    // Offset end date by desired number of days
    // end.setDate(start.getDate() + 7);
  }

  handleResponse = (response) => {
    response.json().then(r => {
      this.setState({
        playlist: r.playlist
      })
    });
  }

  onSubmit = (data) => {
    console.log('submitting data: ', data);
    post('/create/', { ...data }, this.props.spotify_token).then(this.handleResponse)
  }

  render() {
    return (
      <div className="hero">
        {this.state.playlist ? (
          <Playlist playlist={this.state.playlist} />
        ) : (
          <SearchForm onSubmit={this.onSubmit} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  spotify_token: state.auth.spotify_token,
})

export default connect(mapStateToProps)(Home);
