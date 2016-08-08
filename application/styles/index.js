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
      },
      listFooter: {
        textAlign: 'center',
        fontSize: 10,
        color: "#AAAAAA"
      },

      /* Login Container Styles  */
      loginContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#F5FCFF'
      },
      loginFormLabel: {
          textAlign: 'right',
          fontSize: 10,
          color: '#000000',
          fontWeight: 'bold'
      },
      loginFormTextInput: {
        height: 20,
        color: 'black',
        textAlign: 'left',
        borderRadius: 10,
        padding: 5,
        fontSize: 10
      },
      loginFormFieldSet: {
        margin: 10,
        alignItems: 'flex-start',
        flexWrap: 'wrap'
      },
      loginButton: {
        color: 'white',
        backgroundColor: '#337AB7',
        width: 80,
        alignSelf: 'center',
        borderRadius: 10,
        fontSize: 15,
        padding: 5
      }
    });
  }
}
