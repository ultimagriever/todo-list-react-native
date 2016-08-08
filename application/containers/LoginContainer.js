import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import Button from 'react-native-button';
import { Styles }  from '../styles';
import Fieldset from '../components/Fieldset';

export default class LoginContainer extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={Styles.loginContainer}>
        <Fieldset field="E-mail Address" isPassword={false} type="email-address" inputPlaceholder="Enter username" onInput={this.props.onUpdateUsername} value={this.props.usernameValue} />
        <Fieldset field="Password" isPassword={true} inputPlaceholder="Enter password" onInput={this.props.onUpdatePassword} value={this.props.passwordValue} />
        <Button onPress={this.props.authenticator} style={Styles.loginButton}>
          Sign in
        </Button>
      </View>
    )
  }

}