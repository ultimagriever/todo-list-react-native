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
import Loading from './application/components/Loading';
import TodoListContainer from './application/containers/TodoListContainer';

class TodoListReactNative extends Component {
  constructor() {
    super();

    this.state = {
      loading: true
    }

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: false
      });
    }, 2000);
  }

  render() {
    return this.state.loading
      ? (<Loading speed={200} />)
      : (
        <TodoListContainer />
        );
  }
}

AppRegistry.registerComponent('TodoListReactNative', () => TodoListReactNative);
