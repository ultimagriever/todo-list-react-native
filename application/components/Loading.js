import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Styles } from '../styles';

class Loading extends Component {
  constructor(props) {
    super(props);

    this.originalText = this.props.text;

    this.state = {
      text: this.originalText
    };

    this.componentDidMount = this.componentDidMount.bind(this);
    this.componentWillUnmount = this.componentWillUnmount.bind(this);
  }

  componentDidMount() {
    var stopper = this.state.text + '...';

    this.interval = setInterval(function() {
      if (this.state.text === stopper) {
        this.setState({
          text: this.originalText
        });
      } else {
        this.setState({
          text: this.state.text + '.'
        });
      }
    }.bind(this), this.props.speed);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <View style={Styles.container}>
        <Text style={Styles.welcome}>{this.state.text}</Text>
      </View>
    )
  }
}

Loading.defaultProps = {
  text: 'Loading',
  speed: 500
};

module.exports = Loading;
