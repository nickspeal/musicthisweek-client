import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Row } from 'reactstrap';
import PlaylistTable from './PlaylistTable';
import { initiateWebsocket } from '../../apis/MusicThisWeekAPI';

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
    this.socket = initiateWebsocket(`/subscribe/?playlist=${this.props.playlist}`);
    this.socket.onmessage = this.onMessage
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
      <Container style={{ width: '80%', height: '100%', marginTop: '80px' }}>
        <Row style={{ textAlign: 'left', maxWidth: '600px', marginBottom: '50px', display: 'flex', flexDirection: 'column' }}>
          <h4>MADE FOR YOU</h4>
          <h1>DISCOVER NOW</h1>
          <p>
            Your weekly mixtape of upcoming concerts. Enjoy new discoveries and maybe youll find a concert you want to see! Check back here to update the playlist next week!
          </p>
          <p>
            3/12/2018 - 3/19/2018
          </p>
          <p>
            {this.state.events.length} concerts, {this.state.songs.length} songs
          </p>
          <button onClick={this.onClick} style={{ width: '200px' }}>
            PLAY ON SPOTIFY
          </button>
        </Row>
        {this.state.songs.length ? (
          <Row>
            <PlaylistTable list={this.state.songs} />
          </Row>
        ) : (
          <div>Searching for shows near you...</div>
        )}
      </Container>
    );
  }

}

export default Playlist;
