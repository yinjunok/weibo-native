import React, { Component, createRef, createContext } from 'react';
import {
  View,
  StyleSheet,
  ViewPagerAndroid,
  DrawerLayoutAndroid,
} from 'react-native';
import { connect } from 'react-redux';
// import { createDrawerNavigator  } from 'react-navigation';
import HomeScreen from './HomeScreen';
import MessageScreen from './MessageScreen';
import DiscoveryScreen from './DiscoveryScreen';
import { MainHeader, SideMenu } from '../../containers';

class IndexScreen extends Component {
  constructor(props) {
    super(props);
    this.drawer = createRef();
    this.pager = createRef();
    this.state = {
      page: 0
    }
  }

  componentDidUpdate() {
    // console.log(this.props.userInfo);
  }

  componentDidMount() {
    // console.log(this.props.userInfo);
  }

  openDrawer = () => {
    this.drawer.current.openDrawer();
  }

  closeDrawer = () => {
    this.drawer.current.closeDrawer();
  }

  rootNavigator = (routeName) => {
    const { navigate } = this.props.navigation;
    navigate(routeName);
  }

  jumpToIndex = (index) => {
     this.pager.current.setPage(index);
  }

  pageChange = ({ nativeEvent }) => {
    this.setState({
      page: nativeEvent.position
    })
  }
  
  render () {
    const {
      page,
    } = this.state;

    return (
      <DrawerLayoutAndroid
        drawerWidth={280}
        ref={this.drawer}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => <SideMenu closeDrawer={this.closeDrawer} />}
      >
        <View style={styles.container}>
          <MainHeader
            page={page}
            openDrawer={this.openDrawer}
            jumpToIndex={this.jumpToIndex}
            openDrawer={this.openDrawer}
          />
          <ViewPagerAndroid
            initialPage={0}
            ref={this.pager}
            style={styles.viewPager}
            onPageSelected={this.pageChange}
          >
            <View style={styles.pageStyle} key="1">
              <HomeScreen rootNavigator={this.rootNavigator} />
            </View>
            <View style={styles.pageStyle} key="2">
              <DiscoveryScreen />
            </View>
            <View style={styles.pageStyle} key="3">
              <MessageScreen />
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
    flex: 1
  },
  pageStyle: {
    alignItems: 'center',
  }
});

const mapState = ({ userInfo }) => ({
  userInfo,
});

export default connect(mapState)(IndexScreen);