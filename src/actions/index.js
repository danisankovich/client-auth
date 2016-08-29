import axios from 'axios';

const ROOT_URL = 'http://localhost:3000';

export function signinUser({email, password}) {
  return function(dispatch) { //redux-thunk gives access to the dispatch
                              //function. it lets use return a function instead
                              //of an object from action creator
      axios.post(`${ROOT_URL}/signin`, { email, password })
      // dispatch({ type: ... });
  }
}
