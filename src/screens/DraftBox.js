import React, { Component } from 'react';
import { View, Text } from 'react-native';

class DraftBox extends Component {
  static navigationOptions = {
    title: '草稿箱'
  }

  render() {
    return (
      <View>
        <Text>
          草稿箱
        </Text>
      </View>
    );
  }
}

export default DraftBox;