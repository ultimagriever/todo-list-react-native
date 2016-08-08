import React, { Component } from 'react';
import { Text } from 'react-native';
import { Styles } from '../styles';

export default class Label extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Text style={Styles.loginFormLabel}>
        {this.props.content}
      </Text>
    )
  }
}