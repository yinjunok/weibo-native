import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { PostCard, BusinessCard } from '../../containers';
import { Refresh } from '../../components';
import Spinner from 'react-native-spinkit';

class HomeScreen extends Component {
  render() {
    const { rootNavigator } = this.props;
    
    return (
      <View style={{ flex: 1, zIndex: 1 }}>
        <ScrollView style={styles.container} key="1">
          <Spinner />
          <TouchableWithoutFeedback onPress={() => rootNavigator('PersonalHomepage')}>
            <View>
              <BusinessCard />
            </View>
          </TouchableWithoutFeedback>

          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </ScrollView>
        <Refresh />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default HomeScreen;
