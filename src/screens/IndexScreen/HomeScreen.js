import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { PostCard } from '../../containers';
import { Refresh } from '../../components';

class HomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, zIndex: 1 }}>
        <ScrollView style={styles.container} key="1">
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
