import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { post } from 'axios';
import { isEmail, isEmpty } from 'validator';
import { NamedTextInput } from '../components';

class Registered extends Component {

  state = {
    email: '',
    nickname: '',
    password: '',
    passwordRepeat: '',
    message: '',
    showMessage: false,
    error: false,
  }

  inputChange = (text, type) => {
    this.setState({
      [type]: text,
      showMessage: false,
    });
  }

  submit = async () => {
    const {
      email,
      nickname,
      password,
      passwordRepeat,
    } = this.state;

    if (!isEmail(email)) {
      this.setState({
        showMessage: true,
        message: '邮箱格式不正确',
        error: true,
      });
      return;
    }

    if (isEmpty(nickname)) {
      this.setState({
        showMessage: true,
        message: '昵称不能为空',
        error: true,
      });
      return;
    }

    if(password.length < 6) {
      this.setState({
        showMessage: true,
        message: '密码长度不能小于六位',
        error: true,
      });
      return;
    }
    
    if (password !== passwordRepeat) {
      this.setState({
        showMessage: true,
        message: '两次密码输入不一致',
        error: true,
      });
      return;
    }

    try {
      let res = await post('/api/v1/registered', {
        email,
        nickname,
        password,
        password_repeat: passwordRepeat,
      });
      if (res.error_code !== 0) {
        this.setState({
          showMessage: true,
          message: res.message,
          error: true,
        });
      } else {
        this.setState({
          showMessage: true,
          message: res.message,
          error: false,
        });
        setTimeout(() => {
          this.props.navigation.navigate('Login');
        }, 2500);
      }
    } catch (err) {
      // pass
    }
  }

  render() {
    const { message, error, showMessage } = this.state;
    return (
      <View style={styles.container}>
        <View>
          {
            showMessage 
              && <Text style={[styles.message, error ? styles.messageError : styles.messageSuccess]}>
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
