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
            <tr key={`${row.date}-${row.venue}-${row.artists}`}>
              <td>{row.song}</td>
              <td>{row.artists[0]}</td>
              <td>{row.venue}</td>
              <td>{row.date}</td>
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
