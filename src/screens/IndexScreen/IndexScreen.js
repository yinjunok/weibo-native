import React, { Component, createRef } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import { createDrawerNavigator } from 'react-navigation';
import { TabView, SceneMap } from 'react-native-tab-view';
import HomeScreen from './HomeScreen';
import MessageScreen from './MessageScreen';
import DiscoveryScreen from './DiscoveryScreen';
import { IndexHeader, SideMenu } from '../../containers';

class IndexScreen extends Component {
  state = {
    index: 0,
  }

  routes = [
    { key: 'HomeScreen' },
    { key: 'DiscoveryScreen' },
    { key: 'MessageScreen' },
  ];

  jumpIndex = (index) => this.setState({ index })

  renderTabBar = () => (
    <IndexHeader
      index={this.state.index}
      jumpIndex={this.jumpIndex}
    />
  )

  render () {
    const navigationState = {
      index: this.state.index, 
      routes: this.routes
    };

    return (
      <TabView
        navigationState={navigationState}
        renderScene={SceneMap({
          HomeScreen: HomeScreen,
          DiscoveryScreen: DiscoveryScreen,
          MessageScreen: MessageScreen,
        })}
        onIndexChange={this.jumpIndex}
        renderTabBar={this.renderTabBar}
      />
    )
  }
}

export default createDrawerNavigator(
  {
    IndexScreen: {
      screen: IndexScreen
    }
  },
  {
    drawerWidth: 280,
    contentComponent: (props) => <SideMenu {...props} />
  }
);
