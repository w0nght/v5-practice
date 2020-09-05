/* MessageScreen.js */
import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

export default class MessageScreen extends Component {
  // constructor() {
  //   this.state = {
  //     dataSet: [
  //       { label: 'param1', value: 0 },
  //       { label: 'param2', value: 1 },
  //       { label: 'param3', value: 2 },
  //     ]
  //   }
  // }
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
        <View>
          {/* <RadioForm /> */}
          {/* <Text>you pick +{this.state.dataSet[]}</Text> */}
        </View>
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