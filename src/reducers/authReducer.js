import * as types from '../actions/types';

const initialState = {
  spotify_token: undefined,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SAVE_TOKEN:
      return {
        ...state,
        spotify_token: action.spotify_token,
      };
    case types.REMOVE_TOKEN:
      return {
        ...state,
        spotify_token: initialState.spotify_token,
      };
    default:
      console.error('authreducer: Unknown action type', action);
      return state;
  }
}

export default authReducer;
