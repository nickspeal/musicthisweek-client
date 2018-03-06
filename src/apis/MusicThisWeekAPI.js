const BASE_URL = 'http://localhost:8888';

export function get(endpoint, token) {
  const headers = {};
  if (token) {
    headers['Authorization'] = `Bearer: ${token}`
  }
  return fetch(BASE_URL + endpoint, {
    method: 'GET'
  })
};

export function post(endpoint, data, token) {
  const headers = {
    'content-type': 'application/json',
  }
  if (token) {
    headers['Authorization'] = `Bearer: ${token}`
  }

  return fetch(BASE_URL + endpoint, {
    body: JSON.stringify(data),
    method: 'POST',
    mode: 'cors',
    headers,
  })
}
