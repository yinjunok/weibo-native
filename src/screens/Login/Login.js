import React, { Component } from 'react';
import { post } from 'axios';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import Spinner from 'react-native-spinkit';
import styles from './styles';
import { NamedTextInput, Alert } from '../../components';

class Login extends Component {
  state = {
    username: '',
    password: '',
    message: '',
    error: false,
    showMessage: false,
    sending: false,
  }

  submit = async () => {
    const { username, password } = this.state;

    if (!username || !password) {
      this.setState({
        message: '账号或密码不能为空',
        error: true,
        showMessage: true,
      });
      return;
    }

    this.setState({
      sending: true,
    });

    try {
      const { data } = await post('/api/v1/login', {
        username,
        password
      });

      if (data.error_code !== 0) {
        this.setState({
          error: true,
          showMessage: true,
          sending: false,
          message: data.message,
        });
      } else {
        this.setState({
          error: false,
          showMessage: true,
          sending: false,
          message: data.message,
        });
        this.props.saveUserInfo(data.data);
        setTimeout(() => {
          this.props.navigation.navigate('MainScreen');
        }, 2000);
      }
    } catch (err) {
      this.setState({
        message: '未知错误',
        error: true,
        sending: false,
        showMessage: true,
      });
    }
  }

  inputChange = (text, type) => {
    this.setState({
      showMessage: false,
      [type]:  text,
    });
  }

  render() {
    const {
      showMessage,
      message,
      error,
      sending,
    } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.inputArea}>
          {
            showMessage
              &&  <View style={styles.message}>
                    <Alert type={error ? 'error' : 'success'} message={message} />
                  </View>
          }
          <NamedTextInput
            name="username"
            editable={!sending}
            underlineColorAndroid="#fff"
            placeholder="请输入邮箱或昵称"
            onChangeText={this.inputChange}
            style={[styles.input, styles.username]}
          />
          <NamedTextInput
            name="password"
            secureTextEntry
            editable={!sending}
            placeholder="请输入密码"
            underlineColorAndroid="transparent"
            onChangeText={this.inputChange}
            style={[styles.input, styles.password, {marginTop: 20}]} />
          <TouchableOpacity
            activeOpacity={.7}
            disabled={sending}
            onPress={this.submit}
          >
            <View style={[styles.button, sending && styles.disabled]}>
              {
                sending
                  ? <Spinner color="#fff" size={28} type="Circle" />
                  : <Text style={styles.buttonText}>登陆</Text>
              }
            </View>
          </TouchableOpacity>
        </View>

        <TouchableOpacity 
          activeOpacity={.7}
          onPress={() => this.props.navigation.navigate('Registered')}
        >
          <View style={styles.registered}>
            <Text style={styles.registeredText}>注册账号</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapState = ({ userInfo }) => ({
  userInfo,
});

const mapDispatch = ({userInfo: { saveUserInfo }}) => ({
  saveUserInfo,
});

export default connect(
  mapState,
  mapDispatch
)(Login);
