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
      jumpToIndex,
      page
    } = this.props;

    return (
      <View style={styles.container}>
        <Avatar size={40} onPress={openDrawer} />
        <View style={styles.menuContainer}>
          <TouchableOpacity activeOpacity={.5} onPress={() => jumpToIndex(0)}>
            <View style={styles.menu}>
              <Text style={[styles.menuText, page === 0 && styles.active]}>
                首页
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={.5} onPress={() => jumpToIndex(1)}>
            <View style={styles.menu}>
              <Text style={[styles.menuText, page === 1 && styles.active]}>
                发现
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={.5} onPress={() => jumpToIndex(2)}>
            <View style={styles.menu}>
              <Text style={[styles.menuText, page === 2 && styles.active]}>
                消息
              </Text>
            </View>
          </TouchableOpacity>
        </View>
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
    backgroundColor: '#fff',
    elevation: 4
  },
  menuContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menu: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
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

export default withNavigation(MainHeader);