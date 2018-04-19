import React, { Component, createRef, createContext } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  DrawerLayoutAndroid,
} from 'react-native';
import { withNavigation, TabNavigator  } from 'react-navigation';
import HomeScreen from './HomeScreen';
import MessageScreen from './MessageScreen';
import DiscoveryScreen from './DiscoveryScreen';
import { MainHeader, SideMenu, PostCard } from '../../containers';

class IndexScreen extends Component {
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

  screen = () => {
    const InnerNavigator = TabNavigator({
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
        const { navigationState: { index }, jumpToIndex } = props;
        return (
          <MainHeader
            index={index}
            openDrawer={this.openDrawer}
            jumpToIndex={jumpToIndex}
            openDrawer={this.openDrawer}
          />
        )
      },
    });
    
    return <InnerNavigator />
  }

  render () {
    return (
      <DrawerLayoutAndroid
        drawerWidth={280}
        ref={this.drawer}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => <SideMenu closeDrawer={this.closeDrawer} />}
      >
        <View style={styles.container}>
            {this.screen()}
        </View>
      </DrawerLayoutAndroid>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default withNavigation(IndexScreen);