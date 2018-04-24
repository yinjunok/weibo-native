import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { PostCard } from '../../containers';
import { Refresh } from '../../components';

class DiscoveryScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1 }}>
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </ScrollView>
        <Refresh />
      </View>
    )
  }
}

export default DiscoveryScreen;