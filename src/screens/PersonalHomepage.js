import React, { Component } from 'react';
import { View, Text } from 'react-native';

class PersonalHomepage extends Component {
  static navigationOptions = {
    title: '个人主页'
  }

  render() {
    return (
      <View>
        <Text>
          个人主页
        </Text>
      </View>
    )
  }
}

export default PersonalHomepage;