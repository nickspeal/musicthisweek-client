import { combineReducers } from 'redux';
import * as types from '../actions/types';
import authReducer from './authReducer';

const filter = (state = '', action) => {
    switch (action.type) {
        case types.FILTER:
            return action.filter;
        default:
            return state;
    }
};



const login = (state, action) => {
  switch
}

const rootReducer = combineReducers({
    filter,
});

export default rootReducer;
