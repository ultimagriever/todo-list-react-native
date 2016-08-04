import React, { Component } from 'react';
import { View, ListView, Text, ScrollView, TextInput, Dimensions, TouchableHighlight } from 'react-native';
import { Styles } from '../styles';
import Button from 'react-native-button';

export default class TodoListContainer extends Component {
  constructor() {
    super();

    var ds = new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 });

    this._data = [
      'Kill the last 2 dragons',
      'Blast Kefka\'s face'
    ];

    this.state = {
      todoText: '',
      dataSource: ds.cloneWithRows(this._data)
    }

    this.testePress = this.testePress.bind(this);
    this.onPressListItem = this.onPressListItem.bind(this);
  }

  testePress() {
    this._data = this._data.concat(this.state.todoText);

    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(this._data)
    })
  }

  onPressListItem() {
    this.setState({
      todoText: 'pqp'
    })
  }

  render() {
    return (
      <ScrollView contentContainerStyle={Styles.container}>
        <ListView 
          dataSource={this.state.dataSource}
          contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}
          renderRow={rowData => <Text style={Styles.instructions} onPress={this.onPressListItem}>{rowData}</Text>} 
          renderHeader={
            () =>
              <View style={{ flex: 1, width: Dimensions.get('window').width - 20, marginBottom: 20 }}>
                <TextInput
                  style={Styles.textInput}
                  placeholder="TODO"
                  onChangeText={(text) => this.setState({ todoText: text })}
                  value={ this.state.todoText }
                />
                <Button onPress={this.testePress}>
                  OK
                </Button>
              </View>
          } />
      </ScrollView>
    )
  }
}