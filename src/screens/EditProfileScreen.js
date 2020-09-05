/* EditProfileScreen.js */

/* MenuScreen.js */
import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Button } from 'react-native';

export default class MenuScreen extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Text>edit profile scereen</Text>
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
}); 