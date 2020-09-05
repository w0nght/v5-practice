/** RegisterScreen.js */

import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, TextInput, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import fonts from '../assets/Fonts';
import TermsFooter from '../../Components/TermsFooter';
var fullWidth = Dimensions.get('window').width; //full width


export default class RegisterScreen extends Component {
  constructor(props) {
	  super(props);
	
	  this.state = {
			name: '',
	  	email: '',
	  	password: '',
			confirmPassword: '',
			location: ''
	  };
	}

	handleSubmit = () => {
		const { password, confirmPassword } = this.state;
		// perform all neccassary validations
		if (password !== confirmPassword) {
			alert('Passwords do not match');
		} else {
			// make API call
		}
	}
/*	state = { isFocused: false };
	onFocusChange = () => {
		this.setState({ isFocused: true });
	};
	onBlurChange = () => {
		this.setState({ isFocused: false });
	} */
	// onFocus() {
	// 	this.setState({
	// 		borderColor: 'green',
	// 	borderWidth: 2,

	// 	})
	// }
	// onBlur() {
	// 	this.setState({
	// 		borderColor: 'yellow',
	// 	borderWidth: 2,
			
	// 	})
	// }
	render() {
		let { fname } = this.state;

		return(
			<ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.screenTitle}>Register</Text>
        <View style={styles.signinTextContainer}>
          <Text style={styles.signinText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('SignIn')}>
            <Text style={styles.signinBtn}>Sign in</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.siteTextContainer}>
          <Text style={styles.instructions}>To become a Creator, please visit our </Text>
          <View style={styles.siteBtnContainer}>
            <TouchableOpacity>
              {/* TODO: function to open browser & navigate to our website */}
                <Text style={styles.siteBtn}>full desktop site</Text>
              </TouchableOpacity>
            <Text style={styles.instructions}>.</Text>
          </View>
        </View>
        <View style={styles.hr} />
        {/* <FBLoginButton /> */}
        <View style={styles.hrOrContainer}>
          <View style={styles.hrOR} />
          <Text style={styles.hrOrText}>OR</Text>
          <View style={styles.hrOR} />
        </View>
				<TextInput
					placeholder='Name'
					placeholderTextColor='#6a6a6a'
					autoCapitalize='words'
					value={this.state.name}
					maxLength={60}
					editable={true}
					keyboardType='default'
					onChangeText={(name) => this.setState({ name })}
					onSubmitEditing={() => this.email.focus()}
					underlineColorAndroid='rgba(0,0,0,0)'
					// onSubmitEditing={(e) => this.onSubmitEditing(e.nativeEvent.text)}
					style={styles.inputBoxBase}
				/>
        <TextInput 
					ref={(input => this.email = input)}
					placeholder='Email'
					placeholderTextColor='#6a6a6a'
					autoCapitalize='none'
					value={this.state.email}
					maxLength={60}
					editable={true}
					keyboardType='email-address'
					onChangeText={(email) => this.setState({ email })}
					onSubmitEditing={() => this.password.focus()}
					underlineColorAndroid='rgba(0,0,0,0)'
					// onSubmitEditing={(e) => this.onSubmitEditing(e.nativeEvent.text)}
					style={styles.inputBoxBase}
				/>
				<TextInput 
					ref={(input => this.password = input)}
					placeholder='Password'
					placeholderTextColor='#6a6a6a'
					value={this.state.password}
					maxLength={40}
					editable={true}
					secureTextEntry={true}
					password={true}
					keyboardType='default'
					onChangeText={(password) => this.setState({ password })}
					onSubmitEditing={() => this.confirmPassword.focus()}
					// onSubmitEditing={(e) => this.onSubmitEditing(e.nativeEvent.text)}
					style={styles.inputBoxBase}
				/>
				<TextInput 
					ref={(input => this.confirmPassword = input)}
					placeholder='Confirm Password'
					placeholderTextColor='#6a6a6a'
					value={this.state.passwordConfirm}
					maxLength={40}
					editable={true}
					secureTextEntry={true}
					password={true}
					keyboardType='default'
					onChangeText={(passwordConfirm) => this.setState({ passwordConfirm })}
					onSubmitEditing={() => this.location.focus()}
					// onSubmitEditing={(e) => this.onSubmitEditing(e.nativeEvent.text)}
					style={styles.inputBoxBase}
				/>
				<TextInput
					ref={(input) => this.location = input}
					placeholder='Location'
					placeholderTextColor='#6a6a6a'
					value={this.state.location}
					maxLength={40}
					editable={true}
					keyboardType='default'
					onChangeText={(location) => this.setState({ location })}
					underlineColorAndroid='rgba(0,0,0,0)'
					// onSubmitEditing={(e) => this.onSubmitEditing(e.nativeEvent.text)}
					style={styles.inputBoxBase}
				/>
   	
				<TouchableOpacity style={styles.btn_choosePhoto}>
					<Text style={styles.btnText}>CHOOSE PROFILE PHOTO</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.btn_register}>
					<Text style={styles.btnText}>REGISTER!</Text>
				</TouchableOpacity>
        <TermsFooter />
			</ScrollView>
		)
	}
}

const styles = StyleSheet.create ({
	contentContainer: {
    backgroundColor: '#f5f5f5',
		paddingVertical: 20,
		alignItems: 'center',
		justifyContent: 'center'
  },
  hr: {
    backgroundColor: '#d6d6d6',
    height: 2,
 		width: fullWidth-50,
 		marginVertical: 30,
	}, 
	hrOrContainer: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	hrOR: {
    backgroundColor: '#d6d6d6',
    height: 2,
		width: (fullWidth-100)/2,
		marginHorizontal: 10
	},
	hrOrText: {
    fontSize: 16,
    fontFamily: fonts.LarsseitBold,
    letterSpacing: 2,
    fontWeight: '500',
    color: '#d6d6d6'
	},
	screenTitle: {
    fontSize: 22,
    fontFamily: fonts.RobotoBold,
    color: '#00d278',
    textAlign: 'center',
    margin: 24,
	},	/* already have an account */
	signinTextContainer: {
		// flexGrow: 1,
		alignItems: 'flex-end',
		paddingVertical: 16,
		flexDirection: 'row',
	},
	signinText: {
    fontSize: 18,
    fontFamily: fonts.Larsseit,
		color: 'black',
	},
	signinBtn: {
    fontSize: 18,
		color: '#00d278',
		textDecorationLine: 'underline',
	}, /* full desktop site for creator */
	siteTextContainer: {
		alignItems: 'flex-end',
		paddingVertical: 16,
		// flexDirection: 'row',
		alignItems: 'center',
	},
	siteBtnContainer: {
		flexDirection: 'row',
	},
	instructions: {
    fontSize: 16,
    fontFamily: fonts.Larsseit,
		color: '#939393',
	    // textAlign: 'center',
	},
	siteBtn: {
		fontSize: 15,
		color: '#939393',
	    // textAlign: 'center',
		// alignItems: 'center',
		textDecorationLine: 'underline',
	},
	// FIXME:
	boxActive: {
		borderWidth: 2,
		borderColor: '#00d278',
	},
	boxInactive: {
		borderWidth: 2,
		borderColor: 'black',
	},
	btn_choosePhoto: {
		width: fullWidth-40,
		height: 64,
		marginVertical: 12,
		borderRadius: 8,
		paddingVertical: 18,
		backgroundColor: '#939393',
	},
	btn_register: {
		width: fullWidth-40,
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
	}
});