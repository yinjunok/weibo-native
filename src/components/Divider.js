import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

const Divider = ({ customStyle }) => {
  return (
    <View style={[styles.line, customStyle]}></View>
  )
};

const styles = StyleSheet.create({
  line: {
    borderBottomWidth: 1,
    borderColor: '#eee',
    marginTop: 10,
    marginBottom: 10,
  }
});

Divider.propTypes = {
  customStyle: PropTypes.object
};

Divider.defaultProps = {
  customStyle: {},
};

export default Divider;