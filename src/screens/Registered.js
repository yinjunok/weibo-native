import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { post } from 'axios';
import { isEmail, isEmpty } from 'validator';
import { NamedTextInput, Alert } from '../components';

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
      let { data } = await post('/api/v1/registered', {
        email,
        nickname,
        password,
        password_repeat: passwordRepeat,
      });
      if (data.error_code !== 0) {
        this.setState({
          showMessage: true,
          message: data.message,
          error: true,
        });
      } else {
        this.setState({
          showMessage: true,
          message: data.message,
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
        <View style={styles.inputArea}>
          {
            showMessage 
              && <Alert type={error ? 'error' : 'success'} message={message} />
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
  inputArea: {
    marginLeft: 30,
    marginRight: 30,
  },
  input: {
    marginTop: 15,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
})

export default Registered;
