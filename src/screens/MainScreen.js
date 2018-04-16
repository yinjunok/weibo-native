import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ViewPagerAndroid,
} from 'react-native';
import { MainHeader } from '../containers';

class MainScreen extends Component {
  static navigationOptions = {
    header: <MainHeader />
  }

  render () {
    return (
      <View style={styles.container}>
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
          <View style={styles.pageStyle} key="3">
            <Text>Third page</Text>
          </View>
        </ViewPagerAndroid>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  viewPager: {
    flex: 1,
  },
  pageStyle: {
    alignItems: 'center',
    padding: 20,
  }
});

export default MainScreen;