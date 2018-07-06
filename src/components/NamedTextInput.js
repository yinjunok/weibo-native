import React, { Component } from 'react';
import { TextInput } from 'react-native';
import PropTypes from 'prop-types';

class NamedTextInput extends Component {
  _onChangeText = (text) => {
    const { onChangeText, name } = this.props;
    onChangeText(text, name);
  }

  render() {
    const { onChangeText, name, ...props } = this.props;
    return (
      <TextInput onChangeText={this._onChangeText} {...props} />
    )
  }
}

NamedTextInput.propTypes = {
  name: PropTypes.string,
  onChangeText: PropTypes.func,
}

NamedTextInput.defaultProps = {
  name: '',
  onChangeText: () => {},
}

export default NamedTextInput;
