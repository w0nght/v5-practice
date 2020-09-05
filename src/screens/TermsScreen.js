/* TermsScreen.js */
/* Terms and COnfitions */
import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';

import CT from '../assets/CT';

export default class TermsScreen extends Component {
  render() {
    return(
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.sideContainer}>
            <View style={styles.headerContainer}>
              <Text style={styles.headerText}>Terms & Conditions</Text>
            </View>
            <View style={styles.listContainer}>
              <View style={styles.subtitleContainer}>
                <CT.Header3Text style={styles.subtitleText}>Subtitle</CT.Header3Text>
              </View>
              <Text style={styles.bodyText}>some text some text some text, some text some text some text, some text some text some text, some text some text some text </Text>
            </View>
            <View style={styles.listLastContainer}>
              <View style={styles.subtitleContainer}>
                <CT.Header3Text style={styles.subtitleText}>Subtitle</CT.Header3Text>
              </View>
              <Text style={styles.bodyText}>some text some text some text, some text some text some text, some text some text some text, some text some text some text </Text>
            </View>
            <View style={styles.goWebsiteContainer}>
              <TouchableOpacity>
                <Text style={styles.goWebsiteText}>Go to our full desktop website.</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  sideContainer: {
    marginHorizontal: 30
  },
  headerContainer: {
    paddingVertical: 30,
    borderBottomWidth: 2
  },
  listContainer: {
    borderBottomWidth: 2,
    borderColor: '#cdcdce',
    paddingVertical: 30
  },
  listLastContainer: {
    paddingVertical: 30
  },
  subtitleContainer: {
    paddingBottom: 30
  },
  headerText: {
    fontFamily: fonts.LarsseitBold,
    fontSize: 26,
    color: '#1a1a1a',
    textAlign: 'center',
    lineHeight: 32
  },
  subtitleText: {
    textAlign: 'center',
    letterSpacing: 1.2
  },
  bodyText: {
    fontFamily: fonts.Larsseit,
    fontSize: 18,
    color: '#1a1a1a',
    textAlign: 'center',
    lineHeight: 26
  },
  goWebsiteContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 30
  },
  goWebsiteText: {
    fontFamily: fonts.Larsseit,
    fontSize: 18,
    color: '#7e7e7e', //TODO: may need to pick a darker color
    textAlign: 'center',
    textDecorationLine: 'underline',
    lineHeight: 26
  },
}); 