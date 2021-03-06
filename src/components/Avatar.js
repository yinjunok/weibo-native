import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Image,
  View,
  TouchableOpacity,
} from 'react-native';

class Avatar extends Component {
  render() {
    const {
      size,
      uri,
    } = this.props;

    return (
      <View style={{ width: size, height: size, borderRadius: size, overflow: 'hidden' }}>
        <Image
          style={{ width: size, height: size }}
          source={{ uri }} />
      </View>
    );
  }
}

Avatar.propTypes = {
  size: PropTypes.number,
  uri: PropTypes.string,
}

Avatar.defaultProps = {
  size: 60,
  uri: 'https://weibo-dev.oss-cn-beijing.aliyuncs.com/default-images/avatar-default.png',
}

export default Avatar;