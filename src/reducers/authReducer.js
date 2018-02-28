import * as types from '../actions/types';

const initialState = {};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case types.LOGIN:

      default:
        return state;

    }
}

export default authReducer;
