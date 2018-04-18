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
import HomePage from './HomePage';
import { MainHeader, SideMenu, PostCard } from '../../containers';

class IndexScreen extends Component {
  constructor(props) {
    super(props);
    this.drawer = createRef();
    this.pager = createRef();
    this.state = {
      pager: 0
    }
  }

  openDrawer = () => {
    this.drawer.current.openDrawer();
  }

  closeDrawer = () => {
    this.drawer.current.closeDrawer();
  }

  onPageSelected = e => {
    this.setState({
      pager: e.nativeEvent.position
    })
  }

  jumpPager = page => {
    // 顶部导航点击延迟的厉害
    this.pager.current.setPage(page);
    this.setState({
      pager: page,
    });
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
          <MainHeader
            openDrawer={this.openDrawer}
            pager={this.state.pager}
            jumpPager={this.jumpPager}
          />
          <ViewPagerAndroid
            style={styles.viewPager}
            onPageSelected={this.onPageSelected}
            initialPage={this.state.pager}
            ref={this.pager}
          >
            <View key="1" style={styles.viewPager}>
              <HomePage />
            </View>
            <View key="2">
              <HomePage />
            </View>
            <View key="3">
              <HomePage />
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
  },
  viewPager: {
    flex: 1,
  }
});

export default withNavigation(IndexScreen);