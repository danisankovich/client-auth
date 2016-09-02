import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';
import reduxThunk from 'redux-thunk';

import App from './components/app';
import Signin from './components/auth/signin';
import Signup from './components/auth/signup';
import Signout from './components/auth/signout';
import Information from './components/information';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
        <Route path='/' component={App}>
          <Route path='signin' component={Signin}></Route>
          <Route path='signup' component={Signup}></Route>
          <Route path='signout' component={Signout}></Route>
          <Route path='information' component={Information}></Route>
        </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
