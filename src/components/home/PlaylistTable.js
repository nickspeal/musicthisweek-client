import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';

const BREAKPOINT = '600px'; // Table renders differently above this screen width

class PlaylistTable extends React.Component {
  static propTypes = {
    list: PropTypes.arrayOf(PropTypes.shape({
      artists: PropTypes.arrayOf(
        PropTypes.string.isRequired,
      ).isRequired,
      venue: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      song: PropTypes.string,
    }).isRequired).isRequired,
  }

  state = {
    wideScreen: false,
  }

  componentDidMount() {
    window.onresize = this.checkScreenSize;
  }

  checkScreenSize = () => {
    const wideScreen = window.matchMedia(`(min-width: ${BREAKPOINT})`).matches;
    if (this.state.wideScreen !== wideScreen){
      this.setState({ wideScreen })
    }
  }

  render() {
    return (
        <Table hover>
          <thead>
            <tr>
              {this.state.wideScreen &&<td>TITLE</td>}
              <td>ARTIST</td>
              {this.state.wideScreen &&<td>VENUE</td>}
              <td>DATE</td>
            </tr>
          </thead>
          <tbody>
            {this.props.list.map(row => (
              <tr key={`${row.song.uri}`}>
                {this.state.wideScreen && <td>{row.song.name}</td>}
                <td>{row.artist.name}</td>
                {this.state.wideScreen &&<td>{row.event.venue}</td>}
                <td><a href={row.event.url} target="_blank" rel="noopener noreferrer">{row.event.date}</a></td>
              </tr>
            ))}
          </tbody>
        </Table>
    );
  }
}

export default PlaylistTable;
