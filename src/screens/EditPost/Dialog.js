import React, { Component } from 'react';
import { Modal, View, Dimensions, StyleSheet } from 'react-native';

const { height: winHeight, width: winWidth } = Dimensions.get('window');

class Dialog extends Component {
  render() {
    const { children, ...rest } = this.props;
    
    return (
      <Modal {...rest}>
        <View style={[styles.mask, { height: winHeight }]}>
          <View style={[styles.content, { width: winWidth - 40 }]}>
            {children}
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  mask: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, .5)',
  },
  content: {
    backgroundColor: '#fff',
    borderRadius: 5,
    height: winHeight / 2,
  },
});

export default Dialog;
