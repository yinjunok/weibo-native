import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Avatar } from '../components';

class MainHeader extends Component {
  render() {
    const {
      openDrawer,
      navigation,
      jumpToIndex,
      index
    } = this.props;

    return (
      <View style={styles.container}>
        <Avatar size={40} onPress={openDrawer} />

        <TouchableOpacity activeOpacity={.5} onPress={() => jumpToIndex(0)}>
          <View style={styles.menu}>
            <Text style={[styles.menuText, index === 0 && styles.active]}>
              首页
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={.5} onPress={() => jumpToIndex(1)}>
          <View style={styles.menu}>
            <Text style={[styles.menuText, index === 1 && styles.active]}>
              发现
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={.5} onPress={() => jumpToIndex(2)}>
          <View style={styles.menu}>
            <Text style={[styles.menuText, index === 2 && styles.active]}>
              消息
            </Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity
          activeOpacity={.5}
          onPress={() => navigation.navigate('EditPost')}
        >
          <View>
            <Icon name="edit" size={25} color="#999" />
          </View>
        </TouchableOpacity>
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
    shadowRadius: 2,
    backgroundColor: '#fff',
  },
  menu: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuText: {
    fontSize: 16,
    color: '#666',
  },
  active: {
    color: 'blue',
  }
});

export default MainHeader;