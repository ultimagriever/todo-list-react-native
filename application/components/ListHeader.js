import React, { Component } from 'react';
import { View, TextInput, Dimensions } from 'react-native';
import Button from 'react-native-button';
import { Styles } from '../styles';

export default class ListHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ flex: 1, width: Dimensions.get('window').width - 20, marginBottom: 10 }}>
        <TextInput
          style={Styles.textInput}
          placeholder="TODO"
          onChangeText={this.props.onChangeText}
          value={ this.props.value }
        />
        <Button onPress={this.props.onButtonPress}>
          OK
        </Button>
      </View>
    )
  }
}