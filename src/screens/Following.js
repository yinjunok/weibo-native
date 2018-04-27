import React, { Component } from 'react';
import {
  View,
  ScrollView,
} from 'react-native';
import { PostCard, BusinessCard } from '../containers';

class Following extends Component {
  static navigationOptions = {
    title: '正在关注'
  }

  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <View style={{ margin: 10, marginBottom: 0 }}>
          <BusinessCard />
        </View>
        <View style={{ margin: 10, marginBottom: 0 }}>
          <BusinessCard />
        </View>
        <View style={{ margin: 10, marginBottom: 0 }}>
          <BusinessCard />
        </View>
        <View style={{ margin: 10, marginBottom: 0 }}>
          <BusinessCard />
        </View>
        <View style={{ margin: 10, marginBottom: 0 }}>
          <BusinessCard />
        </View>
        <View style={{ margin: 10, marginBottom: 0 }}>
          <BusinessCard />
        </View>
      </ScrollView>
    )
  }
}

export default Following;