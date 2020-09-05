/* Home.js */
import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import fonts from '../assets/Fonts';
import Cards from './Cards';

// TODO: add the navigation on the card fan tip hand shake logo too

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.welcomContainer}>
            <Text style={styles.welcomeText}>
                Welcome to Fan Tipper,{'\n'}the world's first social{'\n'}tipping platform.
            </Text>
          </View>
          <Cards imageUri={require('../assets/images/cprofile_2.jpg')} distance='30' navigation={this.props.navigation}/>
          <Cards imageUri={require('../assets/images/cprofile_1.jpg')} distance='34' navigation={this.props.navigation}/>
          <Cards imageUri={require('../assets/images/cprofile_1.jpg')} distance='20' />
          <Cards imageUri={require('../assets/images/cprofile_3.jpg')} distance='10' />
        </ScrollView>
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center', 
    // justifyContent: 'center'
  },
  welcomContainer: {
    height: 150,
    backgroundColor: '#f5f5f5',
    paddingVertical: 28,
    borderBottomColor: '#6a6a6a', 
    borderBottomWidth: 0.4
  },
  welcomeText: {
    fontFamily: fonts.LarsseitBold,
    fontSize: 24,
    color: '#1a1a1a',
    textAlign: 'center',
    lineHeight: 32
  }
});