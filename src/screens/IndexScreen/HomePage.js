import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { PostCard } from '../../containers';

class HomePage extends Component {
  render() {
    return (
      <ScrollView style={styles.container} key="1">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default HomePage;
