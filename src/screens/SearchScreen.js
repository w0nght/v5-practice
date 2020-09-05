/* SearchScreen.js */
import React, { Component } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

export default class SearchScreen extends Component {
  static navigationOptions = {
    headerRight: (
      <Button
      onPress={() => alert('Hello from header button!')}
      title='Header button'
      color='#fff'
    />
    ),
    // header: (navigation) => ({
    //   visible: true,
    //   style: Styles.navBar,
    //   tintColor: 'white',
      
    // }),
    //  he
  };
  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.welcome}>SearchScreen</Text>
        <Text style={styles.instruction}>This is search screen</Text>
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
    margin: 10,
  },
  instruction: {
    fontSize: 16,
    textAlign: 'center',
    margin: 10,
  }
});