import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Animated } from 'react-native';

export default class Spinner extends Component {
  constructor() {
    super();
    this.state = {
      rotate: new Animated.Value(0),
    };
  }

  startAnimation = () => {
    this.state.rotate.setValue(0);
    Animated.timing(
      this.state.rotate,
      {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }
    ).start(() => this.startAnimation()); 
  }

  componentDidMount() {
    this.startAnimation();
  }

  render () {
    console.log(this.state.fadeAnim);
    return (
      <Animated.View style={{ transform: [{rotate: this.state.rotate.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
      })}] }}>
        <Icon name="spinner" color="#fff" size={25} />
      </Animated.View>
    )
  }
}
