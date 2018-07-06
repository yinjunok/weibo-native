import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { post } from 'axios';
import { NamedTextInput } from '../components';

class Registered extends Component {

  state = {
    email: '',
    nickname: '',
    password: '',
    passwordRepeat: '',
    message: '一条消息',
    success: true,
  }

  inputChange = (text, type) => {
    this.setState({
      [type]: text,
    });
  }

  submit = async () => {
    const {
      email,
      nickname,
      password,
      passwordRepeat,
    } = this.state;
    try {
      let result = await post('/api/v1/registered', {
        email,
        nickname,
        password,
        password_repeat: passwordRepeat,
      });
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  }

  jump = () => {
    this.props.navigation.navigate('Registered')
  }

  render() {
    const { message, success } = this.state;
    return (
      <View style={styles.container}>
        <View>
          {
            message 
              && <Text style={[styles.message, success ? styles.messageSuccess : styles.messageError]}>
                  {message}
                 </Text>
          }
          <NamedTextInput
            name="email"
            placeholder="输入邮箱"
            style={styles.input}
            onChangeText={this.inputChange}
            underlineColorAndroid="transparent"
          />
          <NamedTextInput
            name="nickname"
            placeholder="输入昵称"
            style={styles.input}
            onChangeText={this.inputChange}
            underlineColorAndroid="transparent"
          />
          <NamedTextInput
            name="password"
            secureTextEntry
            placeholder="输入密码"
            style={styles.input}
            onChangeText={this.inputChange}
            underlineColorAndroid="transparent"
          />
          <NamedTextInput
            name="passwordRepeat"
            secureTextEntry
            placeholder="确认密码"
            style={styles.input}
            onChangeText={this.inputChange}
            underlineColorAndroid="transparent"
          />
        </View>
        <TouchableOpacity
          activeOpacity={.7}
          onPress={this.submit}
        >
          <View style={styles.registered}>
            <Text style={styles.registeredText}>注册</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  registered: {
    borderTopWidth: 1,
    borderTopColor: '#EEE',
    backgroundColor: '#03A9F4',
    height: 60,
    justifyContent: 'center',
  },
  registeredText: {
    textAlign: 'center',
    fontSize: 20,
    color: '#fff',
  },
  input: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 15,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  message: {
    textAlign: 'center',
    fontSize: 16,
  },
  messageError: {
    color: 'red',
  },
  messageSuccess: {
    color: 'green',
  }
})

export default Registered;
