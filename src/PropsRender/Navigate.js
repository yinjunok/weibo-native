import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';

class Navigate extends Component {
  render() {
    const { navigate } = this.props.navigation;
    
    return this.props.children(navigate)
  }
};

export default withNavigation(Navigate);