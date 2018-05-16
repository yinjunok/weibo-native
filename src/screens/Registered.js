import React, { Component } from 'react';
import {
  View,
  Input,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

class Registered extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View >
          <TextInput
            placeholder="输入邮箱"
            style={styles.input}
            underlineColorAndroid="transparent"
          />
          <TextInput
            placeholder="输入昵称"
            style={styles.input}
            underlineColorAndroid="transparent"
          />
          <TextInput
            secureTextEntry
            placeholder="输入密码"
            style={styles.input}
            underlineColorAndroid="transparent"
          />
          <TextInput
            secureTextEntry
            placeholder="确认密码"
            style={styles.input}
            underlineColorAndroid="transparent"
          />
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
})

export default Registered;
