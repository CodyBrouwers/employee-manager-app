import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import secrets from '../.secrets.json';

import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: secrets.firebase.apiKey,
      authDomain: 'authentication-2bd9d.firebaseapp.com',
      databaseURL: 'https://authentication-2bd9d.firebaseio.com',
      projectId: 'authentication-2bd9d',
      storageBucket: 'authentication-2bd9d.appspot.com',
      messagingSenderId: '1079778004480'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Router />
      </Provider>
    );
  }
}

export default App;
