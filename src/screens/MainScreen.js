import React, { Component, createRef } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  ViewPagerAndroid,
  DrawerLayoutAndroid,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import { MainHeader, SideMenu, PostCard } from '../containers';

class MainScreen extends Component {
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
    return (
      <DrawerLayoutAndroid
        drawerWidth={280}
        ref={this.drawer}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => <SideMenu closeDrawer={this.closeDrawer} />}
      >
        <View style={styles.container}>
          <MainHeader openDrawer={this.openDrawer} />
          <ViewPagerAndroid
            style={styles.viewPager}
            initialPage={0}
            ref={node => this.pager = node}
          >
            <View key="1">
              <PostCard />
              <PostCard />
            </View>
            <View key="2">
              <Text>Second page</Text>
            </View>
            <View key="3">
              <Text>Third page</Text>
            </View>
          </ViewPagerAndroid>
        </View>
      </DrawerLayoutAndroid>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
  },
  viewPager: {
    flex: 1,
  }
});

export default withNavigation(MainScreen);