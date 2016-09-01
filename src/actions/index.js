import axios from 'axios';
import { browserHistory } from 'react-router'; // commits info about url to react router, and to make changes to url
import {AUTH_USER, AUTH_ERROR, UNAUTH_USER} from './types';

const ROOT_URL = 'http://localhost:3000';

export function signinUser({email, password}) {
  return function(dispatch) { //redux-thunk gives access to the dispatch
                              //function. it lets use return a function instead
                              //of an object from action creator
      axios.post(`${ROOT_URL}/signin`, { email, password })
        .then(response => {
          dispatch({type: AUTH_USER});

          localStorage.setItem('token', response.data.token);

          browserHistory.push('/information'); // success pushes you to /information.

        })
        .catch(() => {
          // catch does not take you to new page
          dispatch(authError('EMAIL/PASSWORD combo incorrect'));
        })
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}

export function signoutUser() {
  localStorage.removeItem('token');
  return { type: UNAUTH_USER};
}
