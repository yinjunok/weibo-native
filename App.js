import React from 'react';
import axios from 'axios';
import { AsyncStorage } from 'react-native';
import { Provider } from 'react-redux';
import { dispatch } from '@rematch/core';
import store from './src/models';
import Navigation from './src/Navigation';

export default class Shell extends React.Component {
  constructor(props) {
    super(props);
    axios.defaults.baseURL = 'http://172.16.63.85:7001';

    this.init();
  }

  async init() {
    try {
      const result = await AsyncStorage.getItem('userInfo');
      dispatch.userInfo.setUserInfo(JSON.parse(result));
      console.log(JSON.parse(result));
    } catch (err) {
      // pass
    }
  }

  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}