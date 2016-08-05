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

class TodoListReactNative extends Component {
  constructor() {
    super();
  }

  render() {
    return (
        <TodoListContainer />
    );
  }
}

AppRegistry.registerComponent('TodoListReactNative', () => TodoListReactNative);
