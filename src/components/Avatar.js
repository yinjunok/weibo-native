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
      onPress,
    } = this.props;

    return (
      <TouchableOpacity onPress={onPress} style={{ overflow: 'hidden' }} activeOpacity={.7}>
        <View style={{ width: size, height: size, borderRadius: size, overflow: 'hidden' }}>
          <Image
            style={{ width: size, height: size }}
            source={{ uri }} />
        </View>
      </TouchableOpacity>
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