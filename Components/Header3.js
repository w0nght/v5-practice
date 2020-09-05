/* header3Text.js */
import React from 'react';
import { Text, StyleSheet } from 'react-native';
import fonts from '../src/assets/Fonts';

const Header3Text = props => (
  <Text {...props} style={[styles.header3Texts, props.style]}>
    {props.children}
  </Text>
);

const styles = StyleSheet.create({
  header3Texts: {
    fontFamily: fonts.LarsseitBold,
    color: '#00d278',
    fontSize: 18,
    letterSpacing: 2,
    textTransform: 'uppercase'
  }
});

export default Header3Text;