import React, { Component } from 'react';
import { View, Text } from 'react-native';

class PersonalSetting extends Component {
  static navigationOptions = {
    title: '个人设置'
  }

  render() {
    return (
      <View>
        <Text>
          个人设置
        </Text>
      </View>
    )
  }
}

export default PersonalSetting;