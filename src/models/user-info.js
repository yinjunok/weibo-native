import { AsyncStorage } from 'react-native';
import axios from 'axios';

export default {
  state: null,
  reducers: {
    setUserInfo(state, payload) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${payload.token}`;
      return payload;
    },
    clear() {axios.defaults.headers.common['Authorization'] = '';
      return null;
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
    },
    async clearUserInfo() {
      try {
        await AsyncStorage.removeItem('userInfo');
        this.clear();
      } catch (err) {
        // pass
      }
    }
  }
};
