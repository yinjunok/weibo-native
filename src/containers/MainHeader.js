import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableNativeFeedback
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Avatar } from '../components';

class MainHeader extends Component {
  render() {
    const { openDrawer } = this.props;

    return (
      <View style={styles.container}>
        <Avatar size={40} onPress={openDrawer} />
        <Text style={styles.menuText}>
          首页
        </Text>
        <Text style={styles.menuText}>
          发现
        </Text>
        <Text style={styles.menuText}>
          消息
        </Text>
        <TouchableNativeFeedback>
          <View>
            <Icon name="edit" size={25} color="#999" />
          </View>
        </TouchableNativeFeedback>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 60,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
  },
  menuText: {
    fontSize: 16,
  }
});

export default MainHeader;