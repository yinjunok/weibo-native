import React, { Component } from 'react';
import {
  View,
  Input,
  Text,
  TextInput,
  StyleSheet,
  TouchableNativeFeedback,
} from 'react-native';

class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputArea}>
          <TextInput
            underlineColorAndroid="#fff"
            placeholder="请输入邮箱或昵称"
            style={[styles.input, styles.username]}
          />
          <TextInput
            secureTextEntry
            placeholder="请输入密码"
            underlineColorAndroid="#fff"
            style={[styles.input, styles.password, {marginTop: 20}]} />
          <TouchableNativeFeedback>
            <View style={styles.button}>
              <Text style={styles.buttonText}>登陆</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
        <TouchableNativeFeedback>
          <View style={styles.registered}>
            <Text style={styles.registeredText}>注册账号</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  inputArea: {
    marginTop: 150,
  },
  input: {
    marginLeft: 30,
    marginRight: 30,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  button: {
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#03A9F4',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
  registered: {
    borderTopWidth: 1,
    borderTopColor: '#EEE',
    backgroundColor: '#FAFAFA',
    height: 60,
    justifyContent: 'center',
  },
  registeredText: {
    textAlign: 'center',
    fontSize: 20,
    color: '#212121',
  }
})

export default Login;
