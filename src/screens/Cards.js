/* Cards.js */
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

import images from '../assets/Images';
import fonts from '../assets/Fonts';
import CT from '../assets/CT';

import Icon from 'react-native-vector-icons/FontAwesome';
// https://expo.github.io/vector-icons/

class Cards extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{padding: 30, flexDirection: 'row', borderBottomColor: '#6a6a6a', borderBottomWidth: 0.4}}>
          <View>
            <Image source={this.props.imageUri} style={styles.profileIcon} />
            <Image source={images.broShakeLogo} style={styles.broShakeLogo} />
          </View>
          <View style={{paddingLeft: 40, flexDirection: 'column'}}>
        <Icon name='location-arrow' type='FontAwesome' 
          style={{ color: '#00d278' ,fontSize: 18 }} >
          <Text style={styles.distanceText}> {this.props.distance} m</Text>
        </Icon>
        <Text style={styles.locationText}>Atomica</Text>
        <Text style={styles.cityText}>MELBOURNE</Text>
        <View style={{paddingTop: 18}}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('creatorProfile')}>
            <CT.ReadmoreText/>
          </TouchableOpacity>
          </View>
          </View>
        </View>
      </View>
    );
  }
}

export default Cards;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  distanceText: {
    fontFamily: fonts.LarsseitBold,
    letterSpacing: 2,
  },
  locationText: {
    fontFamily: fonts.LarsseitBold,
    color: 'black',
    fontSize: 22,
    lineHeight: 40,
  },
  cityText: {
    fontFamily: fonts.LarsseitBold,
    fontSize: 16,
    letterSpacing: 1.2,

  },
  profileIcon: {
    resizeMode: 'cover',
    height: 80, 
    width: 150
  },
  broShakeLogo: {
    resizeMode: 'contain',
    height: 48, 
    width: 150,
  }
});