import React, { Component } from 'react';
import { View, Text } from 'react-native';

class EditPost extends Component {
  static navigationOptions = {
    title: '编辑'
  }

  render() {
    return (
      <View>
        <Text>
          编辑
        </Text>
      </View>
    )
  }
}

export default EditPost;
