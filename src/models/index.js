import { init } from '@rematch/core';
import userInfo from './user';

const store = init({
  models: {
    userInfo,
  }
});

export default store;
