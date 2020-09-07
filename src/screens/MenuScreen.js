/* MenuScreen.js */
import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Button, Image } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';
import { List, ListItem, Content, Left, Thumbnail, Body, Right } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";

import images from "../assets/Images";

export default class MenuScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fisrtname: "",
      lastname: "",
      name: "",
    };
  }

  componentDidMount() {
    this._retrieveData();
    this._checkStoredKeys();
  }

  _retrieveData = async() => {
    try {
      let user = await AsyncStorage.getItem("usertoken");
      let parsed = JSON.parse(user);

      this.setState({
        name: parsed.name,
      });
    } catch (e) {
      console.log("Something went wrong ", e);
    }
  }

  // For Testing:
  _checkStoredKeys = async() => {
    AsyncStorage.getAllKeys()
    .then((keys)=> AsyncStorage.multiGet(keys)
                    .then((data) => console.log(data)));
    // try {
      
    //   const keys = await AsyncStorage.getAllKeys();
    //   const result = await AsyncStorage.multiGet(keys);
  
    //   return result.map(req => JSON.parse(req)).forEach(console.log);
    // } catch (error) {
    //   console.error(error)
    // }
  }


  _signOutClearAllKeys = async() => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      await AsyncStorage.multiRemove(keys);
      await AsyncStorage.clear();
      this.props.navigation.navigate("auth");

    } catch (e) {
      console.log("Something went wrong ", e);
    }
  }

  _handleSignOut = async() => {
    try {
      let keys = ['usertoken'];
      await AsyncStorage.multiRemove(keys);
      this.props.navigation.navigate("auth");

    } catch (e) {
      console.log("Something went wrong ", e);
    }
  }

  render() {
    return(
      <View style={styles.container}>
        <Content contentContainerStyle={{marginHorizontal: 14,}}>
          <List>
            <ListItem>
              <Thumbnail source={images.broShakeLogo} style={styles.greetingColumn}/>
              <Text style={styles.menuGreetingText}>Hi {this.state.name}</Text>
            </ListItem>
            <ListItem onPress={() => this.props.navigation.navigate("history")}>
              <Icon name="area-chart" color="green" size={26} style={styles.menuIcon}  />
              <Text style={styles.menuText}>FanTip History</Text>
              </ListItem>
            <ListItem iconLeft onPress={() => this.props.navigation.navigate("about")}>
                <Image source={images.menuFanTipLogo} style={{height: 46,width: 46, resizeMode: "cover"}}/>
                <Text style={[styles.menuText, {marginLeft: 20}]}>About FanTipper</Text>
            </ListItem>

            <ListItem onPress={() => this.props.navigation.navigate("editProfile")}>
              <Icon name="user" color="green" size={26} style={styles.menuIcon}/>
              <Text style={styles.menuText}>Edit Profile</Text>
            </ListItem>
            <ListItem last onPress={this._handleSignOut}>
              <Icon name="sign-out" color="green" size={26} style={styles.menuIcon}/>
              <Text style={styles.menuText}>Log Out</Text>
            </ListItem>
          </List>
        </Content>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#00D278",
  },
  greetingColumn: {
    borderColor: "white", 
    borderWidth: 2.5,
    marginRight: 20
  },
  menuGreetingText: {
    fontFamily: fonts.RobotoBold,
    fontSize: 26,
    textAlign: "center",
    // margin: 10,
    color: "white",
  },
  menuText: {
    fontFamily: fonts.LarsseitBold,
    color: "white",
    fontSize: 24,
    textAlign: "center",
    // margin: 10,
  },
  menuFanTipLogo: {
    height: 50,
    width: 50,
    resizeMode: "contain",
  },
  menuIcon: {
    marginVertical:8, 
    paddingLeft: 10, 
    paddingRight: 40,
    borderWidth: 0,
  },
}); 