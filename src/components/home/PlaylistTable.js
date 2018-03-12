import React from 'react';
import PropTypes from 'prop-types';

const PlaylistTable = (props) => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <td>TITLE</td>
            <td>ARTIST</td>
            <td>VENUE</td>
            <td>DATE</td>
          </tr>
        </thead>
        <tbody>
          {props.list.map(row => (
            <tr key={`${row.song.uri}`}>
              <td>{row.song.name}</td>
              <td>{row.artist.name}</td>
              <td>{row.event.venue}</td>
              <td><a href={row.event.url} target="_blank" rel="noopener noreferrer">{row.event.date}</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

PlaylistTable.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    artists: PropTypes.arrayOf(
      PropTypes.string.isRequired,
    ).isRequired,
    venue: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    song: PropTypes.string,
  }).isRequired).isRequired,
}

export default PlaylistTable;
