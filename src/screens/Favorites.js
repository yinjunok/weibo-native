import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Favorites extends Component {
  static navigationOptions = {
    title: '我的收藏'
  }

  render() {
    return (
      <View>
        <Text>
          我的收藏
        </Text>
      </View>
    )
  }
}

export default Favorites;