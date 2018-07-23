import React, { Component, createRef } from 'react';
import {
  View,
  Modal,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

class ExtendModal extends Component {
  
  static getDerivedStateFromProps(props) {
    const { visible } = props;
    return {
      visible,
    };
  }

  constructor() {
    super();

    this.state = {
      visible: false,
    }
  }

  closeModal = () => {
    this.setState({
      visible: false,
    });
  }

  render() {
    const { visible } = this.state;
    const {
      position,
      maskClosable,
      animationType,
      onRequestClose,
    } = this.props;

    return (
      <Modal
        transparent
        visible={visible}
        animationType={animationType}
        onRequestClose={onRequestClose}
      >
        <TouchableOpacity
          activeOpacity={1}
          disabled={!maskClosable}
          onPress={this.closeModal}
          style={[styles.container, styles[position]]}
        >
          <View>
            {this.props.children}
          </View>
        </TouchableOpacity>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, .5)',
    alignItems: 'center',
  },
  top: {
    justifyContent: 'flex-start',
  },
  middle: {
    justifyContent: 'center',
  },
  bottom: {
    justifyContent: 'flex-end',
  },
});

ExtendModal.propTypes = {
  // 动画类型
  animationType: PropTypes.oneOf(['none', 'slide', 'fade']),
  // 关闭后的回调
  onRequestClose: PropTypes.func,
  // 是否显示
  visible: PropTypes.bool,
  // 能否通过触摸 mask 关闭 modal
  maskClosable: PropTypes.bool,
  // mask 背景色
  maskColor: PropTypes.string,
  // 内容显示的位置
  position: PropTypes.oneOf(['top', 'middle', 'bottom']),
}

ExtendModal.defaultProps = {
  animationType: 'fade',
  onRequestClose: () => {},
  visible: false,
  maskColor: 'rgba(0, 0, 0, .5)',
  maskClosable: true,
  position: 'middle',
}

export default ExtendModal;
