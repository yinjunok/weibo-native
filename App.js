import React from 'react';
import axios from 'axios';
import { createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import {
  Favorites,
  IndexScreen,
  PersonalHomepage,
  SystemSetting,
  PersonalSetting,
  DraftBox,
  EditPost,
  PostDetails,
  Following,
  Login,
  Registered,
} from './src/screens';
import store from './src/models';

const Inner = createStackNavigator({
  MainScreen: {
    screen: IndexScreen,
    navigationOptions: {
      header: null,
    }
  },
  PostDetails: {
    screen: PostDetails,
  },
  PersonalHomepage: {
    screen: PersonalHomepage,
  },
  Favorites: {
    screen: Favorites,
  },
  PersonalSetting: {
    screen: PersonalSetting,
  },
  SystemSetting: {
    screen: SystemSetting,
  },
  DraftBox: {
    screen: DraftBox,
  },
  EditPost: {
    screen: EditPost,
  },
  PostDetails: {
    screen: PostDetails,
  },
  Following: {
    screen: Following,
  },
  Login: {
    screen: Login,
    navigationOptions: {
      header: null,
    }
  },
  Registered: {
    screen: Registered,
    navigationOptions: {
      title: '注册'
    }
  }
}, {
  initialRouteName: 'Login'
});

export default class Shell extends React.Component {
  constructor(props) {
    super(props);

    axios.defaults.baseURL = 'http://172.16.63.85:7001';
  }
  render() {
    return (
      <Provider store={store}>
        <Inner />
      </Provider>
    );
  }
}