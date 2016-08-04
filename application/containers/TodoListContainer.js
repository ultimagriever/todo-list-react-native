import React, { Component } from 'react';
import { View, ListView, Text, ScrollView, TextInput, Dimensions, TouchableHighlight, Alert } from 'react-native';
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
      dataSource: ds.cloneWithRows(this._data),
      selectedIndex: null
    }

    this.testePress = this.testePress.bind(this);
  }

  testePress() {
    if (this.state.todoText.length > 0) {
      if (this.state.selectedIndex === null) { // Insert
        this._data = this._data.concat(this.state.todoText);
      } else { // Update
        var index = parseInt(this.state.selectedIndex);

        var newData = this._data.slice(0);
        newData[index] = this.state.todoText;

        this._data = newData;
      }

      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this._data),
        todoText: '',
        selectedIndex: null
      })
    }
  }

  onPressListItem(text, index) {
    this.setState({
      todoText: text,
      selectedIndex: index
    })
  }

  onLongPressListItem(index) {
    Alert.alert('Are you sure?', 'Are you sure you want to delete this row? This action cannot be reverted.', [
      { text: 'Yes', onPress: this.deleteItem.bind(this) },
      { text: 'No', onPress: () => false }
    ])
  }

  deleteItem(index) {
    var newData = this._data.slice(0);

    newData.splice(index, 1);

    this._data = newData;

    console.log(this._data);

    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(this._data)
    });
  }

  render() {
    return (
      <ScrollView contentContainerStyle={Styles.container}>
        <ListView 
          dataSource={this.state.dataSource}
          contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}
          renderRow={
            (text, sectionID, rowID, highlightRow) => 
              <Text
                key={rowID}
                style={Styles.instructions}
                onPress={this.onPressListItem.bind(this, text, rowID)}
                onLongPress={this.onLongPressListItem.bind(this, rowID)}>
                  {text}
              </Text>} 
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