import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

// 样式参考 antd: https://ant.design/components/alert-cn/

const iconColorMap = {
  info: '#1890ff',
  error: '#f5222d',
  success: '#52c41a',
  warning: '#faad14',
}

const iconNameMap = {
  info: 'info',
  error: 'error',
  warning: 'warning',
  success: 'check-circle',
}

class Alert extends Component {
  render() {
    const {
      type,
      message,
      showIcon,
    } = this.props;

    return (
      <View style={[styles.shell, styles[type]]}>
        {
          showIcon &&
            <View style={styles.iconPosition}>
              <Icon
                size={14}
                color={iconColorMap[type]}
                name={iconNameMap[type]}
              />
            </View>
        }
        <Text>
          {message}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  shell: {
    borderWidth: 1,
    borderRadius: 4,
    flexDirection: 'row',
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 15,
    paddingRight: 15,
  },

  iconPosition: {
    left: -5,
    top: 3,
  },

  success: {
    borderColor: '#b7eb8f',
    backgroundColor: '#f6ffed',
  },
  
  info: {
    borderColor: '#91d5ff',
    backgroundColor: '#e6f7ff',
  },

  warning: {
    borderColor: '#ffe58f',
    backgroundColor: '#fffbe6',
  },

  error: {
    borderColor: '#ffa39e',
    backgroundColor: '#fff1f0',
  },

  text: {
    fontSize: 14,
    color: 'rgba(0,0,0,.65)',
  },
});

Alert.propTypes = {
  message: PropTypes.string,
  type:  PropTypes.oneOf(['success', 'info', 'warning', 'error']),
  showIcon: PropTypes.bool,
}

Alert.defaultProps = {
  message: '',
  type: 'info',
  showIcon: true,
}

export default Alert;
