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
      uri,
      onPress,
    } = this.props;

    return (
      <TouchableNativeFeedback onPress={onPress} style={{ overflow: 'hidden' }}>
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
  onPress: PropTypes.func,
}

Avatar.defaultProps = {
  size: 60,
  uri: 'https://blog.ayanami.ws/avatar.png',
  onPress: () => {}
}

export default Avatar;