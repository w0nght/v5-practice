/* NotificationScreen.js */
import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView, TextInput, Button } from 'react-native';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

export default class NotificationScreen extends Component {
  constructor () {
    super()
    this.state = {
    
    }
  }

  render() {
    return(
      <View style={styles.container}>
        <Text 
        style={{
          fontFamily: fonts.LarsseitBold,
          fontSize: 20,
          color: '#1a1a1a',
          textAlign: 'center',
          lineHeight: 30
          }}>
            COMING SOON!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },

});