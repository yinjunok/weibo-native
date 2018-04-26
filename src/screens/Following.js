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
        <BusinessCard />
        <BusinessCard />
        <BusinessCard />
        <BusinessCard />
        <BusinessCard />
        <BusinessCard />
        <BusinessCard />
      </ScrollView>
    )
  }
}

export default Following;