/* HistoryScreen.js */

/* MenuScreen.js */
import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Button } from 'react-native';

export default class HistoryScreen extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Text>History</Text>
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