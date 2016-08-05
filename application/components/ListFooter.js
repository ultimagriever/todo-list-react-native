import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Styles } from '../styles';

export default class ListFooter extends Component {
  render() {
    return (
      <View contentContainerStyle={{ margin: 10 }}>
        <Text style={Styles.listFooter}>
          Edit a row by tapping on it then changing its contents on the text field.
        </Text>
        <Text style={Styles.listFooter}>
          Delete a row by long pressing it and confirming the prompt.
        </Text>
      </View>
    );
  }
}