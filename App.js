import { DrawerLayoutAndroid } from 'react-native';
import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { SideMenu } from './src/containers';
import { MainScreen } from './src/screens';

class Demo extends Component {
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

const RootStack = StackNavigator({
  'personSetting': {
    screen: MainScreen,
  },
  'systemSetting': {
    screen: Demo,
    routeName: '系统设置'
  },
});

export default () => (
  <DrawerLayoutAndroid
    drawerWidth={280}
    drawerPosition={DrawerLayoutAndroid.positions.Left}
    renderNavigationView={() => <SideMenu />}
  >
    <RootStack />
  </DrawerLayoutAndroid>
)
