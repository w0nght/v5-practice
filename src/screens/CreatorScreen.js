/* CreatorScreen.js */
import React, { Component } from "react";

import { View, StyleSheet, Text, ScrollView, Dimensions, Image, ImageBackground } from "react-native";
import { ListItem, Body, Content, Card, CardItem } from "native-base";
// import Hr from "react-native-hr";

import Icon from "react-native-vector-icons/FontAwesome";

import images from "../assets/Images";
import Fonts from "../assets/Fonts";
import CT from "../assets/CT";
import { TouchableOpacity } from "react-native-gesture-handler";

var fullWidth = Dimensions.get("window").width; //full width

export default class CreatorScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fisrtname: "",
      lastname: "",
      name: "DJ Ash Millott",
      location: "MOSCOW, RUSSIA",
    };
  }

  render() {
    return(
      <View style={styles.container}>
        <ScrollView>
          <ImageBackground
            style={styles.profileBackground}
            resizeMode= "cover"
            // FIXME:
            source={require("../assets/images/userA/background-01.jpg")}>
            <View style={styles.overlay}>
              <Image
                style={styles.creatorIcon}
                //FIXME:
                source={require("../assets/images/userA/861.jpg")}/>
              <Text style={styles.creatorName}>
                {this.state.name}
              </Text>
              <Text style={styles.subtitleText}>
                {this.state.location}
              </Text>
              <View style={styles.shareBtnRow}>
                <View style={styles.shareBtnContainer}>
                  <Icon.Button 
                    style={styles.shareBtnStyle}
                    name="facebook" 
                    backgroundColor="#3b5998">
                      <CT.ButtonText>Share</CT.ButtonText>
                  </Icon.Button>
                </View>
                <View style={styles.shareBtnContainer}>
                  <Icon.Button 
                    style={styles.shareBtnStyle}
                    name="twitter" 
                    backgroundColor="#4099FF">
                    <CT.ButtonText>Tweet</CT.ButtonText>
                  </Icon.Button>
                </View>
                <View style={styles.shareBtnContainer}>
                  <Icon.Button 
                    style={styles.shareBtnStyle}
                    name="instagram" 
                    backgroundColor="#DA3176">
                    <CT.ButtonText>Share</CT.ButtonText>
                  </Icon.Button>
                </View>
              </View> 
              <View style={styles.shareFanTip}>
                <Icon.Button 
                  style={styles.shareBtnStyle}
                  name="paperclip" 
                  color="#8C8C8C"
                  backgroundColor="#DDDDDD">
                  <CT.ButtonText style={{color: "#8C8C8C"}}>FanTipper.com/diash</CT.ButtonText>
                </Icon.Button>
              </View>
            </View>
          </ImageBackground>
          <Content contentContainerStyle={{marginHorizontal: 10}}>
            <Card transparent style={styles.cardWithBottomBorder}>
              <CardItem>
                <Body style={styles.bodyCenterContainer}>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate("sendTip")}>
                    <Image source={images.broShakeLogo} style={styles.broShakeLogo}/>
                  </TouchableOpacity>
                </Body>
              </CardItem>
            </Card>
            <Card transparent style={styles.cardWithBottomBorder}>
              <CardItem>
                <View style={styles.tipCountSection}>
                  <View style={styles.tipColumnSection}>
                    <Text style={styles.subtitleText}>TIPS</Text>
                    <Text style={styles.tipMoneyText}>2801</Text>
                  </View>
                  <View style={styles.tipColumnSection}>
                    <Text style={styles.subtitleText}>$</Text>
                    <Text style={styles.tipMoneyText}>516.80</Text>
                  </View>
                </View>
              </CardItem>
              <CardItem>
                <Text style={styles.quoteText}>"Your generosity will help me reach me target to record a new album."</Text>
              </CardItem>
              <CardItem style={{paddingTop: 0}}>
                <Text style={styles.targetText}>11% of $5000 target reached</Text>
              </CardItem>
            </Card>
            <Card transparent style={styles.cardWithBottomBorder}>
              <CardItem><Icon name="heart" color="#00d278" size={18} style={{marginRight: 10}}/><CT.Header3Text>top fans</CT.Header3Text></CardItem>
              <Body></Body>
            </Card>
            <Card transparent style={styles.cardWithBottomBorder}>
              <CardItem><CT.Header3Text>about</CT.Header3Text></CardItem>
              <CardItem>
                <Body>
                  <Text style={{color: "#414042", fontFamily: fonts.Larsseit, fontSize: 18, fontWeight: "bold", lineHeight: 26}}>From mad beats to wicked licks, DJ Ash mixes like a boss.</Text>
                  <View style={{paddingVertical:20}}>
                    <Text style={{color: "#414042", fontFamily: fonts.Larsseit, fontSize: 18, letterSpacing: 0.5, lineHeight: 26}}>Paul Oakenfold describes his early life as a "bedroom DJ" in a podcasted interview with Vancouver"s 24 Hours, stating he grew up listening to The Beatles. Later 21-year-old Oakenfold and lan Paul moved to 254 West 54th Sterrt. Studio 54"s Steve Rubell ran the place and onlt alliwed popular people inside.</Text></View>
                  <View style={{paddingVertical: 10}}><CT.ReadmoreText /></View>
                </Body>
              </CardItem>
            </Card>
            <Card transparent style={styles.cardWithBottomBorder}>
              <CardItem><CT.Header3Text>gallery</CT.Header3Text></CardItem>
              <CardItem>
                <Body>
                  <View style={{flexDirection:"row", justifyContent: "space-between", alignSelf: "stretch", paddingBottom: 20}} >
                    <Image source={images.defaultGallery} style={{height: 100, width: 166}}/>
                    <Image source={images.defaultGallery} style={{height: 100, width: 166}}/>
                  </View>
                  <View style={{flexDirection:"row",justifyContent: "space-between", alignSelf: "stretch", paddingBottom: 20}} >
                    <Image source={images.defaultGallery} style={{height: 100, width: 166}}/>
                    <Image source={images.defaultGallery} style={{height: 100, width: 166}}/>
                  </View>
                  <View style={{flexDirection:"row",justifyContent: "space-between", alignSelf: "stretch"}} >
                    <Image source={images.defaultGallery} style={{height: 100, width: 166}}/>
                    <Image source={images.defaultGallery} style={{height: 100, width: 166}}/>
                  </View>  
                </Body>
              </CardItem>
            </Card>
            <Card transparent style={styles.cardWithBottomBorder}>
              <CardItem><Icon name="comment" color="#00d278" size={18} style={{marginRight: 10}} /><CT.Header3Text>2 messages</CT.Header3Text></CardItem>
              <CardItem>
                <Body>
                  
                </Body>
              </CardItem>
            </Card>
            <Card transparent style={styles.cardWithBottomBorder}>
              <CardItem><Icon name="users" color="#00d278" size={18} style={{marginRight: 10}} /><CT.Header3Text>fanbase</CT.Header3Text></CardItem>
              <CardItem>
                <Body></Body>
              </CardItem>
            </Card>
            <Card transparent style={styles.cardWithoutBottomBorder}>
              <CardItem><Text style={styles.supportText}>Become a fan of {this.state.name} and leave a message of support!</Text>
              </CardItem>
              <CardItem>
                <Body style={styles.bodyCenterContainer}>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate("sendTip")}>
                    <Image source={images.broShakeLogo} style={styles.broShakeLogo} />
                  </TouchableOpacity>
                </Body>
              </CardItem>
            </Card>
          </Content>
      </ScrollView>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  profileBackground: {
    height: 350, 
    width: fullWidth,
  },
  overlay: {
    height: 350,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 16,
  },
  creatorIcon: {
    height: 100, 
    width: 100, 
    borderRadius: 100 / 2, 
    borderColor: "white", 
    borderWidth: 2,
    marginBottom: 20,
  },
  creatorName: {
    fontFamily: fonts.LarsseitBold,
    fontSize: 32,
    color: "white",
    lineHeight: 30,
    marginVertical: 10,
  },
  subtitleText: {
    fontFamily: fonts.LarsseitBold,
    fontSize: 16,
    letterSpacing: 1.5,
    color: "#8c8c8c",
    lineHeight: 30,
    textTransform: "uppercase"
  },
  shareBtnRow: {
    flexDirection: "row",
    paddingVertical: 16,
  },
  shareBtnContainer: {
    paddingHorizontal: 6
  },
  shareBtnStyle: {
    marginHorizontal: 6
  },
  bodyCenterContainer: {
    flexDirection: "row", 
    justifyContent: "center", 
    paddingVertical: 10
  },
  cardWithBottomBorder: {
    paddingVertical:12, 
    borderBottomColor: "#6a6a6a", 
    borderBottomWidth: 0.4
  },
  cardWithoutBottomBorder: {
    paddingVertical: 12
  },
  broShakeLogo: {
    resizeMode: "contain",
    height: 56,
    borderRadius: 4
  },
  tipCountSection: {
    flexDirection: "row"
  },
  tipColumnSection: {
    flexDirection: "column",
    width: 180
  },
  tipMoneyText: {
    fontFamily: Fonts.LarsseitBold,
    fontSize: 40, 
    color: "#464646"
  },
  quoteText: {
    fontFamily: fonts.LarsseitBold,
    color: "#00d278", //fan tip green
    fontSize: 26,
    lineHeight: 30
  },
  targetText: {
    fontFamily: fonts.LarsseitBold,
    color: "#cbcdce",
    fontSize: 14,
    letterSpacing: 2,
    textTransform: "uppercase"
  },
  supportText: {
    fontFamily: fonts.LarsseitBold,
    color: "#00d278",
    fontSize: 24,
    textAlign: "center",
    lineHeight: 30
  },
});