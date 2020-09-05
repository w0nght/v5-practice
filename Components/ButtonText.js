import React from 'react';
import { Text, StyleSheet } from 'react-native';
import fonts from '../src/assets/Fonts';

const ButtonText = props => (
  <Text {...props} style={[styles.buttonTexts, props.style]}>
  {props.children}
</Text>
);

const styles = StyleSheet.create({
  buttonTexts: {
    fontFamily: fonts.Roboto,
    fontSize: 17,
    color: 'white', // inactive color  
  }
});

export default ButtonText;
