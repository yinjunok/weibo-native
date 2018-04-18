import React, { Component } from 'react';
import { View, Text } from 'react-native';

class PostDetails extends Component {
  static navigationOptions = {
    title: '微博详情'
  }

  render() {
    return (
      <View>
        <Text>
          主题帖
        </Text>
      </View>
    )
  }
}

export default PostDetails;
