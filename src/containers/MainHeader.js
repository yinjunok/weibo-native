import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { withNavigation } from 'react-navigation';
import { Avatar } from '../components';

class MainHeader extends Component {
  render() {
    const {
      openDrawer,
      navigation,
      jumpPager,
      pager
    } = this.props;

    return (
      <View style={styles.container}>
        <Avatar size={40} onPress={openDrawer} />

        <TouchableOpacity activeOpacity={.5} onPress={() => jumpPager(0)}>
          <Text style={[styles.menuText, pager === 0 && styles.active]}>
            首页
          </Text>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={.5} onPress={() => jumpPager(1)}>
          <Text style={[styles.menuText, pager === 1 && styles.active]}>
            发现
          </Text>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={.5} onPress={() => jumpPager(2)}>
          <Text style={[styles.menuText, pager === 2 && styles.active]}>
            消息
          </Text>
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
  menuText: {
    fontSize: 16,
  },
  active: {
    color: 'blue',
  }
});

export default withNavigation(MainHeader);