import { View, Text, ScrollView, Button, ViewPagerAndroid, StyleSheet } from 'react-native';
import React, { Component } from 'react';
import { DrawerNavigator, DrawerItems, SafeAreaView, StackNavigator } from 'react-navigation';
import Avatar from './src/components/Avatar';
import { SideMenu } from './src/containers';

class Index extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.pager.setPage(1)
    }, 1000)
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View>
          <Text>这里有一段蚊子</Text>
        </View>
        <ViewPagerAndroid
          style={styles.viewPager}
          initialPage={0}
          ref={node => this.pager = node}
        >
          <View style={styles.pageStyle} key="1">
            <Text>First page</Text>
          </View>
          <View style={styles.pageStyle} key="2">
            <Text>Second page</Text>
          </View>
        </ViewPagerAndroid>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  viewPager: {
    flex: 1
  },
  pageStyle: {
    alignItems: 'center',
    padding: 20,
  }
})

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

const CustomDrawerContentComponent = (props) => {
  const { navigate } = props.navigation;
  return (
    <ScrollView>
      <Text>
        头像
      </Text>
      <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
        <View>
          <Button title="个人设置" onPress={() => navigate('personSetting')} />
        </View>
        <View>
          <Button title="系统设置" onPress={() => navigate('systemSetting')} />
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}

export default DrawerNavigator({
  'personSetting': {
    screen: Index,
    routeName: '个人设置'
  },
  'systemSetting': {
    screen: Demo,
    routeName: '系统设置'
  },
}, {
  contentComponent: SideMenu,
});
