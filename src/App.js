import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import { Header } from './components/common';
import secrets from '../.secrets.json';

class App extends Component {
  componentWillMount() {
    console.log(secrets);
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
      <Provider store={createStore(reducers)}>
        <View>
          <Header headerText="Manager" />
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

export default App;
