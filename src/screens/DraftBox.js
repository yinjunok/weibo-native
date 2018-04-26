import React, { Component } from 'react';
import {
  View,
  ScrollView,
} from 'react-native';
import { PostCard } from '../containers';

class DraftBox extends Component {
  static navigationOptions = {
    title: '草稿箱'
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
    );
  }
}

export default DraftBox;