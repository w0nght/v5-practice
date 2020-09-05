/* AuthLoading.js */

import React, { Component } from 'react';
import { View } from 'react-native';
import SplashScreen from './SplashScreen';

class AuthLoading extends Component {
  constructor(props) {
    super(props);

    this.state = { isLoading: true }
  }

  performTimeConsumingTask = async() => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        2000
      )
    );
  }

  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.setState({ isLoading: false });
      this.props.navigation.navigate('auth');  //TODO: navigate to auth | app
    }
  }

	render() {
    if (this.state.isLoading) {
      return <SplashScreen />
    }
    return (
      <View>
      </View>
    );
  }
}

export default AuthLoading;