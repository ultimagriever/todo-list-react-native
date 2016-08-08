/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import { Styles } from './application/styles';
import TodoListContainer from './application/containers/TodoListContainer';
import LoginContainer from './application/containers/LoginContainer';
import firebaseApp from './application/core/Firebase';

class TodoListReactNative extends Component {
  constructor() {
    super();

    this.state = {
      authenticated: false,
      username: '',
      password: ''
    }

    this.auth = firebaseApp.auth();
  }

  updateUsername(content) {
    this.setState({
      username: content
    });
  }

  updatePassword(content) {
    this.setState({
      password: content
    })
  }

  authenticate() {
    if (this.state.username.length === 0 || this.state.password.length === 0) {
      alert('Please provide an e-mail address and a password to log in.');
    } else {
      this.auth.signInWithEmailAndPassword(this.state.username, this.state.password)
        .then(function() {
          this.setState({
            authenticated: true,
            password: ''
          })
        }.bind(this))
        .catch(function(error) {
          alert('Invalid e-mail address or password, please try again.');

          this.setState({
            username: '',
            password: ''
          })

          console.log(error);
        }.bind(this));
    }
  }


  render() {
    return this.state.authenticated ? (<TodoListContainer />) 
    : (
      <LoginContainer
        onUpdateUsername={this.updateUsername.bind(this)}
        onUpdatePassword={this.updatePassword.bind(this)}
        authenticator={this.authenticate.bind(this)}
        usernameValue={this.state.username}
        passwordValue={this.state.password} />);
  }
}

AppRegistry.registerComponent('TodoListReactNative', () => TodoListReactNative);
