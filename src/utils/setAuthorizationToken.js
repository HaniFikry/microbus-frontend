import axios from 'axios';

export default function setAuthorizationToken(token) {
  if (token) {
    axios.defaults.headers.common['Authentication-Token'] = `${token}`
  } else {
    delete axios.defaults.headers.common['Authentication-Token'];
  }
}
