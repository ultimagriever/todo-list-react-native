import React, { Component } from 'react';
import { TouchableHighlight, Text } from 'react-native';
import { Styles } from '../styles';

export default class ListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableHighlight onPress={this.props.onPress} onLongPress={this.props.onLongPress}>
        <Text
          key={this.props.rowID}
          style={Styles.instructions}
          onPress={this.props.onPressListItem}
          onLongPress={this.props.onLongPressListItem}>
            {this.props.item.title}
        </Text>
      </TouchableHighlight>
    )
  }
}