import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SearchForm from './SearchForm';
import Playlist from './Playlist';
import { post } from '../../apis/MusicThisWeekAPI';
import { removeToken } from '../../actions/authActions';
import SiteChrome from '../chrome/SiteChrome';
import BackgroundGradient from '../chrome/BackgroundGradient';
import { SPOTIFY_URL } from '../../apis/SpotifyAPI';

class Search extends React.Component {
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
    if (response.status === 200) {
      response.json().then(r => {
        this.setState({
          playlist: r.playlist
        })
      });
    } else if (response.status === 403) {
      // TODO move this into the API or something more general
      console.log("403 Unauthorized response. Prompting to log in.")
      this.props.removeToken();
      window.location = SPOTIFY_URL;
    } else {
      console.error("Unexpected response from API: ", response);
    }


  }

  onSubmit = (data) => {
    console.log('submitting data: ', data);
    post('create', { ...data }, this.props.spotify_token).then(this.handleResponse)
  }

  render() {
    return (
      <SiteChrome>
        <BackgroundGradient>
          { this.state.playlist ? (
            <Playlist playlist={this.state.playlist} />
          ) : (
            <SearchForm onSubmit={this.onSubmit} />
          )}
        </BackgroundGradient>
      </SiteChrome>
    )
  }
}

const mapStateToProps = state => ({
  spotify_token: state.auth.spotify_token,
})

export default connect(mapStateToProps, { removeToken })(Search);
