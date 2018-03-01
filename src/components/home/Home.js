import React from 'react';
import PropTypes from 'prop-types';
import SearchForm from './SearchForm';

class Home extends React.Component {
  componentWillMount() {
    // Compute dateoffset
    // Offset end date by desired number of days
    // end.setDate(start.getDate() + 7);
  }

  onSubmit = (data) => {
    // Format strings for the date elements:
    // var start_formatted = data.start.toJSON().slice(0,10);
    // var end_formatted = data.end.toJSON().slice(0,10);
    console.log('submitting data: ', data);

    // Update Search text
    // Display a "this will take a while warinng"
    // Make the request!
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

export default Home;
