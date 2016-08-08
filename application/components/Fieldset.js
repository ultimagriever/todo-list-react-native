import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { Styles } from '../styles';
import Label from './Label';

export default class Fieldset extends Component {

  static defaultProps = {
    capitalize: 'none',
    type: 'default'
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={Styles.loginFormFieldSet}>
          <Label content={this.props.field} />
          <TextInput
            style={Styles.loginFormTextInput}
            autoCapitalize={this.props.capitalize}
            keyboardType={this.props.type} 
            secureTextEntry={this.props.isPassword} 
            placeholder={this.props.inputPlaceholder} 
            onChangeText={this.props.onInput}
            value={this.props.value} />
      </View>
    )
  }
}
