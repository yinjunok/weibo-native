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

class IndexHeader extends Component {
  componentDidMount() {
    // console.log(this.props);
  }

  render() {
    const {
      navigation,
      jumpIndex,
      index
    } = this.props;

    return (
      <View style={styles.container}>
        <TouchableOpacity activeOpacity={.7} onPress={() => navigation.toggleDrawer()}>
          <Avatar size={40} />
        </TouchableOpacity>

        <View style={styles.menuContainer}>
          <TouchableOpacity activeOpacity={.5} onPress={() => jumpIndex(0)}>
            <View style={styles.menu}>
              <Text style={[styles.menuText, index === 0 && styles.active]}>
                首页
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={.5} onPress={() => jumpIndex(1)}>
            <View style={styles.menu}>
              <Text style={[styles.menuText, index === 1 && styles.active]}>
                发现
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={.5} onPress={() => jumpIndex(2)}>
            <View style={styles.menu}>
              <Text style={[styles.menuText, index === 2 && styles.active]}>
                私信
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
    fontSize: 14,
    color: '#607D8B',
  },
  active: {
    color: '#263238',
    fontSize: 18,
  }
});

export default withNavigation(IndexHeader);