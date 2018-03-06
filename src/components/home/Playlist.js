import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Playlist extends Component {
  static propTypes = {
    playlist: PropTypes.string.isRequired,
  }

  onClick = () => {
    window.location = this.props.playlist;
  }

  render() {
    return (
      <div className="playlist">
        <h1>Searching...</h1>
        <p>
          Right now we are crawling the web to find concerts in your area. For each artist playing at each event, we're searching Spotify for their most polular tracks and creating a playlist out of them. All this takes a couple minutes for now, but rest assured that I'm working on parallelizing these searches to make them faster. Anyway, the playlist is already created and songs will be added to it in the background over the next couple minutes. Head over to Spotify and check it out!
        </p>
        <button onClick={this.onClick} style={{ width: '400px' }}>
          Open Music This Week on Spotify
        </button>
      </div>
    );
  }

}

export default Playlist;
