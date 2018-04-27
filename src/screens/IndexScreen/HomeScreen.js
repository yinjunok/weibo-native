import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { PostCard, BusinessCard } from '../../containers';
import { Refresh } from '../../components';
import { RootNavigator } from '../../context'

class HomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, zIndex: 1 }}>
        <ScrollView style={styles.container} key="1">
          <RootNavigator.Consumer>
            {
              ({ rootNavigator }) => (
                <TouchableWithoutFeedback onPress={() => rootNavigator('PersonalHomepage')}>
                  <View>
                    <BusinessCard />
                  </View>
                </TouchableWithoutFeedback>
              )
            }
          </RootNavigator.Consumer>
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
