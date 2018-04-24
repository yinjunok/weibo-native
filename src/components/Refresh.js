import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

class Refresh extends Component {
  render() {
    return (
      <TouchableOpacity activeOpacity={.7} style={styles.container}>
        <View>
          <Icon name="refresh" color="#999" size={35} />
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 50,
    position: 'absolute',
    zIndex: 999,
    bottom: 40,
    right: 20,
    zIndex: 99,
    backgroundColor: '#fff',
    elevation: 5,
  }
})

export default Refresh;
