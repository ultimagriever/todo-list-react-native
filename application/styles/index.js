import React, { Component } from 'react';
import { StyleSheet, Dimensions } from 'react-native';

module.exports = {
  get Styles() {
    return StyleSheet.create({
      container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
      },
      welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
      },
      instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
      },
      textInput: {
        height: 30,
        borderColor: 'gray', 
        borderWidth: 1,
        margin: 10,
        borderRadius: 10,
        padding: 5,
        textAlign: 'center'
      }
    });
  }
}
