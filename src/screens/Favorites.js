import React, { Component } from 'react';
import {
  View,
  ScrollView,
} from 'react-native';
import { PostCard } from '../containers';

class Favorites extends Component {
  static navigationOptions = {
    title: '我的收藏'
  }

  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </ScrollView>
    )
  }
}

export default Favorites;