import React, { createRef, Component  } from 'react';
import axios from 'axios';
import { Provider } from 'react-redux';
import moment from 'moment';
import 'moment/locale/zh-cn';
import store from './src/models';
import Navigation from './src/Navigation';
import { setTopLevelNavigator, navigate } from './src/service/navigation-service';

export default class Shell extends Component {
  constructor(props) {
    super(props);
    moment.locale('zh-cn'); // 初始化 moment 插件

    this.navigateRef = createRef();
    axios.defaults.baseURL = 'http://172.16.63.85:7001';

    axios.interceptors.response.use(function(response){
      return response;
    }, function(error){
      if (error.status === 401) {
        navigate('Login');
        store.dispatch('userInfo/clearUserInfo');
      }
      return Promise.reject(error);
    });
  }

  componentDidMount() {
    setTopLevelNavigator(this.navigateRef.current);
  }

  render() {
    return (
      <Provider store={store}>
        <Navigation ref={this.navigateRef} />
      </Provider>
    );
  }
}