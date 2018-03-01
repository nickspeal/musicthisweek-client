const BASE_URL = 'http://localhost:8888';

export function get(endpoint) {
  return fetch(BASE_URL + endpoint, {
    method: 'GET'
  })
};

export function post(endpoint, data) {
  return fetch(BASE_URL + endpoint, {
    body: JSON.stringify(data),
    headers: {
      'content-type': 'application/json'
    },
    method: 'POST',
    mode: 'cors'
  })
}
