/* ForgotPWScreen.js */
'use strict';

import React, { Component } from 'react';

import { StyleSheet, View, KeyboardAvoidingView, Text, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import fonts from '../assets/Fonts';
// import TextInputComp from '../components/TextInputComp';
import { createStackNavigator  } from 'react-navigation';
var fullWidth = Dimensions.get('window').width; //full width


class ForgotPWScreen extends Component {
  constructor() {
		super();
		this.state = { email: ""}
  };
  
  _handlePasswordReset() {
    //TODO: trigger password reset function

  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
   		<Text style={styles.screenTitle}>Forgot Your Password?</Text>
   		<Text style={styles.guildlineText}>Enter the email address you used</Text>
   		<Text style={styles.guildlineText}>to sign up to FanTipper and we'll</Text>
   		<Text style={styles.guildlineText}>reset your password.</Text>
      <View style={styles.hr} />
      <TextInput 
        placeholder='Email'
        placeholderTextColor='#6a6a6a'
        autoCapitalize='none'
        value={this.state.email}
        maxLength={40}
        // selectionColor='#00d278'
        // selectTextOnFocus={false}
        editable={true}
        // onFocus={(e) => this.onFocus(e)}
        // onBlur={(e) => this.onBlur(e)}
        keyboardType='email-address'
        onChangeText={(email) => this.setState({ email })}
        onSubmitEditing={() => this.password.focus()}
        // onSubmitEditing={(e) => this.onSubmitEditing(e.nativeEvent.text)}
        style={styles.inputBoxBase}
      />
   		<TouchableOpacity style={styles.btn_resetPassword} onPress={this._handlePasswordReset} >
   			<Text style={styles.btnText}>Reset Password</Text>
   		</TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
	container: {
    backgroundColor: '#f5f5f5',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
	},
	screenTitle: {
    fontSize: 22,
    fontFamily: fonts.RobotoBold,
    color: '#00d278',
    textAlign: 'center',
    margin: 24
	},
	guildlineText: {
		fontSize: 20,
    fontFamily: fonts.Larsseit,
		color: 'black',
		marginVertical: 2
  },
  hr: { /* Divider */
    backgroundColor: '#d6d6d6',
    height: 2,
    width: fullWidth-50,
    marginVertical: 30
  },
  inputBoxBase: {
		width: fullWidth-40,	//TODO: confirm if -40 or -50
		height: 52,
		fontFamily: fonts.Larsseit,
		fontSize: 18,
		borderColor: '#d6d6d6',
		borderWidth: 2,
		borderRadius: 8,
		backgroundColor: '#ffffff',		
		paddingHorizontal: 26,
		marginVertical: 6,
	},
	btn_resetPassword: {
		width: 364,
		height: 64,
		marginVertical: 12,
		borderRadius: 8,
		paddingVertical: 18,
		backgroundColor: '#00d278'
	},
	btnText: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    fontFamily: fonts.LarsseitBold,
    color: '#ffffff',
    letterSpacing: 3,
    marginLeft: 10,
    textTransform: 'uppercase'
	},
});
export default ForgotPWScreen;