import React from 'react';
import { Text, StyleSheet } from 'react-native';
import fonts from '../src/assets/Fonts';

const MainText = props => (
  <Text style={styles.mainTexts}>{props.children}</Text>
);

const styles = StyleSheet.create({
  mainTexts: {
    fontFamily: fonts.Larsseit,
    fontSize: 18,
    color: '#7e7e7e', // inactive color  
  }
});

export default MainText;