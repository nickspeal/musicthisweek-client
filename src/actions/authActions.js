import * as types from './types';

export function saveToken(spotify_token) {
  return {
    type: types.SAVE_TOKEN,
    spotify_token
  }
}

export function removeToken() {
  return {
    type: types.REMOVE_TOKEN,
  }
}
