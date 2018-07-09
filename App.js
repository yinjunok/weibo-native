import React, { createRef, Component  } from 'react';
import axios from 'axios';
import { Provider } from 'react-redux';
import store from './src/models';
import Navigation from './src/Navigation';
import { setTopLevelNavigator, navigate } from './src/service/navigation-service';

console.log(setTopLevelNavigator);

export default class Shell extends Component {
  constructor(props) {
    super(props);
    this.navigateRef = createRef();
    axios.defaults.baseURL = 'http://172.16.63.85:7001';
    axios.interceptors.response.use(function(response){
      return response.data;
    }, function(error){
      if (error.status === 401) {
        navigate('Login');
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