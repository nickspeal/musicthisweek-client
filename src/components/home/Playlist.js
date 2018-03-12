import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PlaylistTable from './PlaylistTable';

class Playlist extends Component {
  static propTypes = {
    playlist: PropTypes.string.isRequired,
  }

  state = {
    events: [],
    songs: [],
  }

  onClick = () => {
    window.location = this.props.playlist;
  }

  componentDidMount() {
    console.log("starting websocket")
    const url = `ws://127.0.0.1:8888/subscribe/?playlist=${this.props.playlist}`;
    this.socket = new WebSocket(url); // optional second arg protocol
    this.socket.onopen = (event) => console.log("socket opened");
    this.socket.onmessage = this.onMessage
    this.socket.onclose = (event) => console.log("socket closed");
  }

  onMessage = ({ data }) => {
    const parsed = JSON.parse(data);
    console.log("received data. Parsed to:", parsed);
    if (parsed.type === 'events_found') {
      console.log('Type events_found');
      const events = [...this.state.events, ...parsed.events];
      this.setState({ events });
    } else if (parsed.type === 'songs_found') {
      const songs = [...this.state.songs, ...parsed.songs];
      this.setState({ songs })
      // const artist = parsed.artist;
      // const nextList = [...this.state.list];
      // const index = nextList.findIndex(item => item.artists.indexOf(artist) !==-1)
      // const show = nextList[index];
      // if(show) {
      //   show['song'] = parsed.songs[0];
      //   this.setState({ list: nextList });
      // }

    }
  }

  render() {
    return (
      <div style={{ width: '80%', height: '100%', margin: 'auto' }}>
        <div style={{ textAlign: 'left', maxWidth: '600px', marginBottom: '50px' }}>
          <h4>MADE FOR YOU</h4>
          <h1>Music This Week</h1>
          <p>
            Your weekly mixtape of upcoming concerts. Enjoy new discoveries and maybe youll find a concert you want to see! Check back here to update the playlist next week!
          </p>
          <p>
            Made for you by Music This Week - {this.state.events.length} concerts, {this.state.songs.length} songs
          </p>
          <button onClick={this.onClick} style={{ width: '200px' }}>
            PLAY ON SPOTIFY
          </button>
        </div>
        {this.state.songs.length ? <PlaylistTable list={this.state.songs} /> : <div>Searching for shows near you...</div>}
      </div>
    );
  }

}

export default Playlist;
