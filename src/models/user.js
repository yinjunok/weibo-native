import { AsyncStorage } from 'react-native';

export default {
  state: null,
  reducers: {
    setUserInfo(state, payload) {
      return payload;
    }
  },
  effects: {
    async saveUserInfo(payload) {
      try {
        await AsyncStorage.setItem('userInfo', JSON.stringify(payload));
      } catch (err) {
        // pass
      }
      
      this.setUserInfo(payload);
    }
  }
};
