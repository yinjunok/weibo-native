import { init } from '@rematch/core';
import userInfo from './user-info';
import indexPostList from './index-post-list';

const store = init({
  models: {
    userInfo,
    indexPostList,
  }
});

export default store;
