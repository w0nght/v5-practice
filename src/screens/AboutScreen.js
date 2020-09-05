/* AboutScreen.js */

/* MenuScreen.js */
import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView, Image, TouchableOpacity } from 'react-native';

import CT from '../assets/CT';
import images from '../assets/Images';

export default class AboutScreen extends Component {
  render() {
    return(
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.sideContainer}>
            <View style={styles.headerContainer}>
              <Text style={styles.headerText}>Fan Tipper is a new way to give and receive tips online.</Text>
              <Text style={styles.headerText}>Think of it as a digital replacement for the tip jar or the buskers hat. We created it because we think the end of coins shouldn't be the end of generosity.</Text>
              <Text style={styles.headerText}>Even in a ashless society, small change can still make a big difference.</Text>
            </View>
            <View style={styles.listContainer}>
              <View style={styles.subtitleContainer}>
                <CT.Header3Text style={styles.subtitleText}>How do i give a tip?</CT.Header3Text>
              </View>
              <Text style={styles.bodyText}>All you have to do is login or sign up with Facebook, add your credit card details and hey persto! You are ready to start tipping.</Text>
              <Text style={styles.bodyText}>Whenever you see the FanTipper icon on a website or in a restaurant or cafe, don't be shy. Check out their creator page, give them a tip and maybe even add a personal message. It's been designed to work perfectly on your mobile.</Text>
            </View>
            <View style={styles.listContainer}>
              <View style={styles.subtitleContainer}>
                <CT.Header3Text style={styles.subtitleText}>How much does it cost?</CT.Header3Text>
              </View>
              <Text style={styles.bodyText}>FanTipper is free to use for both creators and fans. The only charges are a 5% FanTipper commission and standard third party credit card fees which are deducted from the full tip amount.</Text>
            </View>
            <View style={styles.listContainer}>
              <View style={styles.subtitleContainer}>
                <CT.Header3Text style={styles.subtitleText}>Why would i want to tip online?</CT.Header3Text>
              </View>
              <Text style={styles.bodyText}>By giving a fantip on FanTipper you are not only giving a financial acknowledgment, you are also supporting the creator in other ways.</Text>
              <Text style={styles.bodyText}>Leave a comment and give the creator that warm fuzzy feeling of knowing they have your support. Share your tip thriugh facebook or twitter and you will be promoting the cretor to your friends. Or even if just tipping anonymously, your tip works as a positive review for the creator, helping the creator find new fans.</Text>
            </View>
            <View style={styles.listContainer}>
              <View style={styles.subtitleContainer}>
                <CT.Header3Text style={styles.subtitleText}>How do i become a creator?</CT.Header3Text>
              </View>
              <Text style={styles.bodyText}>A creator can be anyone from an artist, charity or hospitality venue, right through to a blogger, researcher or volunteer. If you can ethically accept tips, you qualify to become a creator on FanTipper. Right now creator accounts are offered by invite only.</Text>
              <Text style={styles.bodyText}>Con tact us via the details below and we will let you know as soon as we are ready to welcome you.</Text>
            </View>
            <View style={styles.listLastContainer}>
              <View style={styles.subtitleContainer}>
                <CT.Header3Text style={styles.subtitleText}>Who is behind fantipper?</CT.Header3Text>
              </View>
              <Text style={styles.bodyText}>A team of independent, entrepreneurial Melbournians lanched FanTipper in 2015.</Text>
              <Text style={styles.bodyText}>All payment transfers are securely handled in Australia by Pin Payments.</Text>
              <View style={styles.goWebsiteContainer}>
                <TouchableOpacity>
                  <Text style={styles.goWebsiteText}>Go to our full desktop website.</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.goWebsiteContainer}>
                <Image resizeMode='cover' style={{height: 120, width: 120}} source={images.fanTipHandshakeGreen} />
              </View>
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
    borderBottomWidth: 2,
    borderColor: '#cdcdce'
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
    color: '#7e7e7e', // TO-EDIT: may need to pick a darker color
    textAlign: 'center',
    textDecorationLine: 'underline',
    lineHeight: 26
  },
}); 