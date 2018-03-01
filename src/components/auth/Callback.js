import React from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { saveToken } from '../../actions/authActions';

// Seemingly too complex URL parser from: https://stackoverflow.com/a/48118278
// Returns an object with keys: access_token, expires_in, token_type
const parseURLParams = (input) => (
  input
    .substring(1)
    .split('&')
    .reduce(
      (initial, item) => {
        if (item) {
          var parts = item.split('=');
          initial[parts[0]] = decodeURIComponent(parts[1]);
        }
        return initial;
      },
      {}
    )
)

class Callback extends React.Component {

  componentWillMount() {
    const params = parseURLParams(this.props.location.hash)
    if (params['access_token']) {
      this.props.saveToken(params['access_token']);
    } else {
      // For example, user clicked cancel
      // TODO handle this.
      console.log('No valid access token: ', params)
    }
  }

  render = () => <Redirect to="/" />
}


export default connect(null, { saveToken })(Callback);
