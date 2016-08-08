import React, { Component } from 'react';
import { View, ListView, Text, ScrollView, TextInput, Dimensions, TouchableHighlight, Alert } from 'react-native';
import { Styles } from '../styles';
import Button from 'react-native-button';
import firebaseApp from '../core/Firebase';
import ListHeader from '../components/ListHeader';
import ListFooter from '../components/ListFooter';
import ListItem from '../components/ListItem';
import Loading from '../components/Loading';

export default class TodoListContainer extends Component {
  constructor() {
    super();

    this.state = {
      todoText: '',
      dataSource: new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 }),
      selectedIndex: null,
      loading: true
    }
    this.todoRef = this.getRef().child('items');
  }

  getRef() {
    return firebaseApp.database().ref();
  }

  listenForItems(todoRef) {
    todoRef.on('value', snap => {

      var items = [];

      snap.forEach(child => {
        items.push({
          title: child.val().title,
          _key: child.key
        })
      });

      this.setState({
        loading: false,
        dataSource: this.state.dataSource.cloneWithRows(items)
      });
    });
  }

  componentDidMount() {
    this.listenForItems(this.todoRef);
  }

  onPress() {
    if (this.state.todoText.length > 0) {
      if (this.state.selectedIndex === null) { // Insert
        this.todoRef.push({ title: this.state.todoText })
      } else { // Update
        
        this.todoRef.child(this.state.selectedIndex).update({ title: this.state.todoText });
      }

      this.setState({
        todoText: '',
        selectedIndex: null
      })
    }
  }

  onPressListItem(item) {
    this.setState({
      todoText: item.title,
      selectedIndex: item._key
    })
  }

  onLongPressListItem(item) {
    Alert.alert('Are you sure?', 'Are you sure you want to delete this row? This action cannot be reverted.', [
      { text: 'Yes', onPress: this.deleteItem.bind(this, item) },
      { text: 'No', onPress: () => false }
    ])
  }

  deleteItem(item) {
    this.todoRef.child(item._key).remove();
  }

  render() {
    return this.state.loading
    ? (<Loading speed={200} />)
    : (
      <ScrollView contentContainerStyle={Styles.container}>
        <ListView 
          enableEmptySections={true}
          dataSource={this.state.dataSource}
          contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}
          renderRow={
            (item, sectionID, rowID, highlightRow) => 
              <ListItem 
                onPress={this.onPressListItem.bind(this, item)} 
                onLongPress={this.onLongPressListItem.bind(this, item)} 
                rowID={rowID} 
                item={item} />
          }
          renderHeader={
            () =>
              <ListHeader onChangeText={(text) => this.setState({ todoText: text })} value={ this.state.todoText } onButtonPress={this.onPress.bind(this)} />
          }
          renderFooter={
            () => 
              <ListFooter />
          } />
      </ScrollView>
    )
  }
}