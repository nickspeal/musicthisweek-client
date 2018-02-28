import * as types from './types';

export function filterTable(filter) {
    return {
        type: types.FILTER,
        filter
    };
}

export function login() {
  return {
    type: types.LOGIN,
  }
}
