const SPOTIFY_BASE_URL = 'https://accounts.spotify.com/authorize';
const SPOTIFY_CLIENT_ID = '338af3083e4e4069960c77b6978cb7a5';
const SPOTIFY_RESPONSE_TYPE = 'token';
const SPOTIFY_REDIRECT_URI = `${window.location.origin}/callback`;
const SPOTIFY_SCOPE = 'playlist-modify-public';
const SPOTIFY_SHOW_DIALOG = 'false';
export const SPOTIFY_URL = `${SPOTIFY_BASE_URL}?client_id=${SPOTIFY_CLIENT_ID}&response_type=${SPOTIFY_RESPONSE_TYPE}&redirect_uri=${SPOTIFY_REDIRECT_URI}&scope=${SPOTIFY_SCOPE}&show_dialog=${SPOTIFY_SHOW_DIALOG}`;
