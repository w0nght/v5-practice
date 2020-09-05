/* readmoreText.js */
/* the default read more link text */

import React from 'react';
import { Text, StyleSheet } from 'react-native';
import fonts from '../src/assets/Fonts';

const ReadmoreText = props => (
  <Text style={styles.readmoreTexts}>{props.children}Read more ...</Text>
);

const styles = StyleSheet.create({
  readmoreTexts: {
    fontFamily: fonts.Larsseit,
    fontSize: 18,
    color: '#6a6a6a', // TO-EDIT: may need to pick a darker color
    textDecorationLine: 'underline'
  }
});

export default ReadmoreText;
