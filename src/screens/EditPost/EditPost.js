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
import PopupDialog, { SlideAnimation } from 'react-native-popup-dialog';
import Dialog from './Dialog';
import { Divider, NamedTextInput, Alert } from '../../components';

const slideAnimation = new SlideAnimation({
  slideFrom: 'bottom',
});

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
    const { content } = this.state;

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
        this.setState({
          error: false,
        });
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

  componentDidMount() {
    // this.popupDialog.show();
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
          </ScrollView>
        </View>
        <Dialog
          visible={true}
          transparent={true}
        >
          <View>
            <Text>Hello</Text>
          </View>
        </Dialog>
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
