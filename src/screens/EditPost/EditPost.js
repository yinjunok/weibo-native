import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { post } from 'axios';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Divider, NamedTextInput, Alert } from '../../components';
import UploadImage from './UploadImage';

class EditPost extends Component {
  static navigationOptions = {
    title: '发表微博'
  }

  state = {
    content: '',
    sending: false,
    error: false,
    message: '',
  }

  submit = async () => {
    const { content, sending } = this.state;

    if (sending) {
      return;
    }

    if (!content) {
      this.setState({
        error: true,
        message: '内容不能为空',
      });
      return;
    }

    try {
      const { data } = await post('/api/v1/auth/post', {
        content,
      });

      if (data.error_code !== 0) {
        this.setState({
          error: true,
          message: data.message,
        });
      } else {
        this.props.getPostList(1);
        this.props.navigation.navigate('MainScreen');
      }
    } catch (err) {
      // console.log(err);
    }
  }

  inputChange = (text, name) => {
    this.setState({
      error: false,
      [name]: text,
    });
  }

  render() {
    const {
      error,
      message,
      sending,
    } = this.state;

    return (
      <View style={styles.container}>
        {
          error && <Alert type="error" message={message} />
        }
        <NamedTextInput
          // autoFocus
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

        <UploadImage />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
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
});

const mapDispatch = ({ indexPostList: { getPostList } }) => ({
  getPostList,
});

export default connect(
  null,
  mapDispatch,
)(EditPost);
