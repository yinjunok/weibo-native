import React, { Component } from 'react';
import { View, Text } from 'react-native';

class SystemSetting extends Component {
  static navigationOptions = {
    title: '系统设置'
  }

  render() {
    return (
      <View>
        <Text>
          系统设置
        </Text>
      </View>
    )
  }
}

export default SystemSetting;