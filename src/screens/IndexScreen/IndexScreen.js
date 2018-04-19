import React, { Component, createRef, createContext } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  ViewPagerAndroid,
  DrawerLayoutAndroid,
} from 'react-native';
import { withNavigation, TabNavigator  } from 'react-navigation';
import HomeScreen from './HomeScreen';
import MessageScreen from './MessageScreen';
import DiscoveryScreen from './DiscoveryScreen';
import { MainHeader, SideMenu, PostCard } from '../../containers';

const DrawerContext  = createContext();

class Screen2 extends Component {
  render() {
    return (
      <View>
        <PostCard />
      </View>
    )
  }
}

class Screen3 extends Component {
  render() {
    return (
      <View>
        <PostCard />
      </View>
    )
  }
}

const Screen = TabNavigator({
  Home: {
    screen: HomeScreen,
  },
  Discovery: {
    screen: DiscoveryScreen,
  },
  Message: {
    screen: MessageScreen,
  },
}, {
  tabBarComponent: props => {
    const { navigationState: { index }, jumpToIndex, navigation } = props;
    return (
      <DrawerContext.Consumer>
        {
          openDrawer =>  (
            <MainHeader
              index={index}
              openDrawer={openDrawer}
              navigation={navigation}
              jumpToIndex={jumpToIndex}
            />
          )
        }
      </DrawerContext.Consumer>
    )
  },
})

class Drawer extends Component {
  constructor(props) {
    super(props);
    this.drawer = createRef();
  }

  openDrawer = () => {
    this.drawer.current.openDrawer();
  }

  closeDrawer = () => {
    this.drawer.current.closeDrawer();
  }

  render () {
    const { Provider } = DrawerContext;

    return (
      <DrawerLayoutAndroid
        drawerWidth={280}
        ref={this.drawer}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => <SideMenu closeDrawer={this.closeDrawer} />}
      >
        <View style={styles.container}>
          <Provider value={this.openDrawer}>
            {this.props.children}
          </Provider>
        </View>
      </DrawerLayoutAndroid>
    )
  }
}

class IndexScreen extends Component {
  render() {
    return (
      <Drawer>
        <Screen />
      </Drawer>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewPager: {
    flex: 1,
  }
});

export default withNavigation(IndexScreen);