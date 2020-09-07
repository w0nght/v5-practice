/* AuthLoading.js */
/** After 2 seconds splash screen the app will identify if a user is logged in or not */
// TODO: update async storage 

import React, { Component } from 'react';
import { View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
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
      try { // direct users to home screen if async token exists
        const userVaule = await AsyncStorage.getItem("usertoken");
        const user = JSON.parse(userVaule);
        if (user !== null) {
          console.log("Async message: user token exists - directing user to home screen");
          this.props.navigation.navigate("app");
        } else {
          // usertoken not exists
          console.log("Async message: user token is null - directing user to auth");
          this.props.navigation.navigate('auth');
        }
      } catch (error) {
        console.log("Something went wrong ", error);
      }
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