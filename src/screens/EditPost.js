import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Divider } from '../components';



class EditPost extends Component {
  static navigationOptions = {
    title: '发表微博'
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          autoFocus
          multiline
          maxLength={150}
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="分享你的快乐吧~"
        />
        <Divider />
        <View>

        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  input: {
    fontSize: 16,
    lineHeight: 24,
    justifyContent: 'flex-start',
    height: 240,
    textAlignVertical: 'top',
  }
})

export default EditPost;
