import React, { Component } from 'react';
import { View, AsyncStorage } from 'react-native';
import Spinner from 'react-native-spinkit';
import { connect } from 'react-redux';

class AuthLoading extends Component {
  componentDidMount() {
    this.init();
  }

  init = async () => {
    try {
      let result = await AsyncStorage.getItem('userInfo');
      result = JSON.parse(result);
      if (result && result.token) {
        this.props.setUserInfo(result);
        this.props.navigation.navigate('MainScreen');
      } else {
        this.props.navigation.navigate('Login');
      }
    } catch (err) {
      // console.log(err);
    }
  }

  render() {
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Spinner color="#64B5F6" size={50} type="Circle" />
      </View>
    );
  }
}

const mapDispatch = ({userInfo: { setUserInfo }}) => ({
  setUserInfo,
});

export default connect(
  null,
  mapDispatch,
)(AuthLoading);
