/* OfferScreen.js */
import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView, Dimensions, Image, Button } from 'react-native';

var fullWidth = Dimensions.get('window').width; //full width
// import { Row } from 'native-base';

// current using this screen to create Tip Details comfirmation screen //
export default class OfferScreen extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.welcome}>OfferScreen</Text> 
         <Text style={styles.instruction}>This screen show latest offers</Text>
        {/* <ScrollView>
          <Content contentContainerStyle={{marginHorizontal: 10}}>
            <View style={styles.receiverContainer}>
              <View style={styles.creatorIconContainer}>
                <Image
                  style={styles.creatorIcon}
                  source={require('../assets/images/userA/861.jpg')}/>
              </View>
              <View style={styles.creatorNameContainer}>
                <Text style={styles.creatorName}>
                    Send a FanTip to {'\n'}DJ Ash Millott
                </Text>
              </View>
            </View>
            <Card transparent style={styles.cardWithBottomBorder}>
              <CardItem>
                  <View style={{}}>
                    <Text style={styles.subtitleText}>How much would you like to tip?</Text>
                    <View style={{flexDirection: 'row'}}>
                      <Text>$2</Text>
                      <Text>$2</Text>
                      <Text>$2</Text>
                    </View>
                  </View>
              </CardItem>
            </Card>
    
            <Card transparent style={styles.cardWithoutBottomBorder}>
              <CardItem>
                <Body style={styles.bodyCenterContainer}>
                  <Button title='Send $5 fantip!'></Button>
                </Body>
              </CardItem>
            </Card>
          </Content>
        </ScrollView> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5', // light-light-grey background
  },
  receiverContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    borderColor: 'red',
    borderWidth: 2,
    borderBottomColor: '#6a6a6a', 
    borderBottomWidth: 0.4
  },
  creatorIconContainer: {
    marginHorizontal: 10,
  },
  creatorIcon: {
    height: 114, 
    width: 114, 
    borderRadius: 114 / 2,
  },
  creatorNameContainer: {
    marginHorizontal: 10,
    flex: 1,  // this 2 lines is to wrap the text that pushed out of screen due to flexDirection
    flexWrap: 'wrap'
  },
  creatorName: {
    fontFamily: fonts.LarsseitBold,
    color: '#00d278',
    fontSize: 24,
    lineHeight: 36,
  },
  subtitleText: {
    fontFamily: fonts.LarsseitBold,
    fontSize: 16,
    letterSpacing: 1.5,
    color: '#8c8c8c',
    lineHeight: 30,
    textTransform: 'uppercase'
  },
  bodyCenterContainer: {
    flexDirection: 'row', 
    justifyContent: 'center', 
    paddingVertical: 10
  },
  cardWithBottomBorder: {
    paddingVertical:12, 
    borderBottomColor: '#6a6a6a', 
    borderBottomWidth: 0.4
  },
  cardWithoutBottomBorder: {
    paddingVertical: 12
  },
  targetText: {
    fontFamily: fonts.LarsseitBold,
    color: '#cbcdce',
    fontSize: 14,
    letterSpacing: 2,
    textTransform: 'uppercase'
  },
  supportText: {
    fontFamily: fonts.LarsseitBold,
    color: '#00d278',
    fontSize: 24,
    textAlign: 'center',
    lineHeight: 30
  },
});