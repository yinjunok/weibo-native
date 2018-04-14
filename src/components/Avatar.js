import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Image,
  View,
  TouchableNativeFeedback,
} from 'react-native';

class Avatar extends Component {
  render() {
    const {
      size,
      uri
    } = this.props;

    return (
      <TouchableNativeFeedback style={{ overflow: 'hidden' }}>
        <View style={{ width: size, height: size, borderRadius: size, overflow: 'hidden' }}>
          <Image
            style={{ width: size, height: size }}
            source={{ uri }} />
        </View>
      </TouchableNativeFeedback>
    );
  }
}

Avatar.propTypes = {
  size: PropTypes.number,
  uri: PropTypes.string,
}

Avatar.defaultProps = {
  size: 60,
  uri: 'https://blog.ayanami.ws/avatar.png',
}

export default Avatar;