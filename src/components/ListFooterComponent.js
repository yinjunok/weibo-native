import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ListFooterComponent = () => (
  <View style={styles.container}>
    <Text style={styles.text}>没有更多内容了~</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
  },
  text: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  }
});

export default ListFooterComponent;