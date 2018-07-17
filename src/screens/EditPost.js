import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { post } from 'axios';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Divider, NamedTextInput, Alert } from '../components';

class EditPost extends Component {
  static navigationOptions = {
    title: '发表微博'
  }

  state = {
    content: '',
    sending: false,
  }

  submit = async () => {
    const { content } = this.state;

    if (!content) {
      return;
    }

    try {
      const res = await post('/api/v1/auth/post', {
        content,
      });

      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }

  inputChange = (text, name) => {
    this.setState({
      [name]: text,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <NamedTextInput
          autoFocus
          multiline
          name="content"
          maxLength={150}
          onChangeText={this.inputChange}
          style={styles.input}
          placeholder="分享你的快乐吧~"
          underlineColorAndroid="transparent"
        />
        <TouchableOpacity activeOpacity={.5} onPress={this.submit}>
          <View style={styles.send}>
            <Icon name="send" size={20} />
          </View>
        </TouchableOpacity>
        <Divider />

        <View style={styles.imgList}>
          <ScrollView horizontal>
            <TouchableOpacity activeOpacity={.7}>
              <View style={styles.img}>
                <Icon name="add" size={40} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={.7}>
              <View style={styles.img}>
                <Icon name="add" size={40} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={.7}>
              <View style={styles.img}>
                <Icon name="add" size={40} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={.7}>
              <View style={styles.img}>
                <Icon name="add" size={40} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={.7}>
              <View style={styles.img}>
                <Icon name="add" size={40} />
              </View>
            </TouchableOpacity>
          </ScrollView>
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
    height: 150,
    textAlignVertical: 'top',
  },
  send: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 15
  },
  imgList: {
    marginBottom: 10,
  },
  img: {
    width: 80,
    height: 80,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#eee',
    borderStyle: 'dotted',
  }
})

export default EditPost;
