import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableNativeFeedback,
} from 'react-native';
import { PostCard, BusinessCard } from '../containers';

class PersonalHomepage extends Component {
  static navigationOptions = {
    title: '个人主页',
  }

  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <BusinessCard />
        <View style={styles.sort}>
          <TouchableNativeFeedback>
            <View style={styles.option}>
              <Text style={styles.optionText}>微博</Text>
            </View>
          </TouchableNativeFeedback>    
          <TouchableNativeFeedback>
            <View style={styles.option}>
              <Text style={styles.optionText}>相册</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
        <View style={{ marginBottom: 10 }}>
          <PostCard />
        </View>
        <View style={{ marginBottom: 10 }}>
          <PostCard />
        </View>
        <View style={{ marginBottom: 10 }}>
          <PostCard />
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  sort: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginTop: 10,
    marginBottom: 10,
  },
  option: {
    padding: 15,
  },
  optionText: {
    textAlign: 'center',
  }
})

export default PersonalHomepage;