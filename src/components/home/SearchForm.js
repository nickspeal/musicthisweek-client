import React, { Component } from 'react';
import moment from 'moment';

const DEFAULT_NRESULTS = 200;
const DEFAULT_INTERVAL = 7; // days

class SearchForm extends Component {
  state = {
    location: 'San Francisco',
    start: moment().format('YYYY-MM-DD'),
    end: moment().add(DEFAULT_INTERVAL, 'days').format('YYYY-MM-DD'),
    searching: false,
  }

  onLocationChange = e => this.setState({ location: e.target.value })
  onStartChange = e => this.setState({ start: e.target.value })
  onEndChange = e => this.setState({ end: e.target.value })

  onSubmit = () => {
    this.setState({ searching: true })
    const data = {
      location: this.state.location,
      start: this.state.start,
      end: this.state.end,
      nResults: DEFAULT_NRESULTS,
    }
    this.props.onSubmit(data);
  }

  render() {
    return (
      <div className="hero">
        <div className="form">
          <h3>FIND MUSIC THIS WEEK:</h3>
          <input
            type="text"
            value={this.state.location}
            placeholder= "Location"
            onChange = {this.onLocationChange}
          />
          <div className="dates">
            <input
              type="date"
              value = {this.state.start}
              onChange = {this.onStartChange}
            />
            <span>to</span>
            <input
              type="date"
              value = {this.state.end}
              onChange = {this.onEndChange}
            />
          </div>
          {/*disabled={this.state.searching} */}
          <button type="submit" onClick={ this.onSubmit } >
            {this.state.searching ? 'SEARCHING' : 'SEARCH'}
          </button>
        </div>
      </div>
    );
  }

}

export default SearchForm;
