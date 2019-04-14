import 'whatwg-fetch';
import CONFIG from '../constants';

const BASE_URL = CONFIG.API_URL;

const HTTP = {
  METHODS: {
    GET: 'GET',
    POST: 'POST',
    DELETE: 'DELETE',
    PUT: 'PUT',
  },
};

const mapToResponse = (resp) => {
  const { data, err } = resp;
  return err ? ({ error: err }) : ({ data });
};

const request = (url, method, options = {}) => fetch(url, Object.assign({
  method,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
}, options))
  .then(data => data.json())
  .then(mapToResponse)
  .catch(error => ({ error }));

export default {
  get(url) {
    return request(BASE_URL + url, HTTP.METHODS.GET);
  },

  post(url, body) {
    return request(BASE_URL + url, HTTP.METHODS.POST, { body: JSON.stringify(body) });
  },

  put(url, body) {
    return request(BASE_URL + url, HTTP.METHODS.PUT, { body: JSON.stringify(body) });
  },

  delete(url) {
    return request(BASE_URL + url, HTTP.METHODS.DELETE);
  },
};
