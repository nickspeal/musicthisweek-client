const BASE_URL = process.env.REACT_APP_API_ENDPOINT;

export function get(endpoint, token) {
  const headers = {};
  if (token) {
    headers['Authorization'] = `Bearer: ${token}`
  }
  return fetch('http://' + BASE_URL + endpoint, {
    method: 'GET'
  })
};

// Endpoint should start with a slash
export function post(endpoint, data, token) {
  const headers = {
    'content-type': 'application/json',
  }
  if (token) {
    headers['Authorization'] = `Bearer: ${token}`
  }

  return fetch('http://' + BASE_URL + endpoint, {
    body: JSON.stringify(data),
    method: 'POST',
    mode: 'cors',
    headers,
  })
}

export function initiateWebsocket(endpoint) {
  console.log("starting websocket");
  const url = `ws://${BASE_URL}${endpoint}`;
  const socket = new WebSocket(url); // optional second arg protocol
  socket.onopen = (event) => console.log("socket opened");
  socket.onclose = (event) => console.log("socket closed");
  return socket;
}
