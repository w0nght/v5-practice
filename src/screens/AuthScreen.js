/* AuthScreen.js */

import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, Image, ImageBackground } from 'react-native';
import fonts from '../assets/Fonts';
import images from '../assets/Images';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import TermsFooter from '../../Components/TermsFooter';
var fullWidth = Dimensions.get('window').width; //full width

export default class AuthScreen extends Component {

  _onPressSignIn() {
    this.navigation.navigate('SignIn');
  }
  render() {
    return (
      <ImageBackground
        source={images.appSignInBG}
        style={styles.backgroundImage}
      >
        <Image source={images.fanTipperLogo} style={styles.logo}/>
        <Text style={styles.promptText}>The destination for giving {'\n'}and receiving tips online.</Text>
        <View style={styles.socialBtnsContainer}>
          <View style={[styles.btn_social, styles.btn_fb]}>
            <FontAwesome.Button 
              name='facebook-square'
              size={30}
              backgroundColor='transparent'
              paddingHorizontal={18}
              iconStyle={{marginRight:10}}
              style={{marginHorizontal: 10}}
              // onPress={this._fbAuth}
              >
            <Text style={styles.btnText}>continue with facebook</Text>
            </FontAwesome.Button>
          </View>
          <View style={styles.btn_social}>
            <FontAwesome.Button 
              name='google'
              size={30}
              backgroundColor='transparent'
              paddingHorizontal={18}
              iconStyle={{marginRight:10}}
              style={{marginHorizontal: 10}}
              // onPress={this._fbAuth}
              >
            <Text style={styles.btnText}>continue with google</Text>
            </FontAwesome.Button>
          </View>
          <Text style={styles.instructions}>No automated posts</Text>
        </View>
        <View style={styles.localBtnsContainer}>
		      <View style={styles.btn_signReg}>
		        <FontAwesome.Button 
		            name='unlock-alt'
		            size={22}
		            backgroundColor='transparent'
                paddingHorizontal={18}
                onPress={() => this.props.navigation.navigate('SignIn')}                
		            >
		          <Text style={styles.btnText}>sign in</Text>
		        </FontAwesome.Button>
	        </View>
	        <View style={styles.btn_signReg}>
		        <FontAwesome.Button 
		            name='plus'
		            size={22}
		            backgroundColor='transparent'
		            paddingHorizontal={18}
                onPress={() => this.props.navigation.navigate('Register')}                
		            >
		          <Text style={styles.btnText}>register</Text>
		        </FontAwesome.Button>
	        </View>
      	</View>
      	<TermsFooter />
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
		flex: 1,
		width: '100%', 
    height: '100%',
    alignItems: 'center',
		justifyContent: 'center'
		//TODO: the size needed to rescale after testing on other device
	},
  logo: {
    alignSelf: 'center', 
    resizeMode: 'contain',
    width: fullWidth-160
  },
  promptText: {
    fontFamily: fonts.LarsseitBold,
    fontSize: 18,    
    color: '#ffffff',
    lineHeight: 26
  },
  instructions: {
    fontFamily: fonts.Larsseit,
		fontSize: 16,
		color: '#939393',
		lineHeight: 26
  },
  socialBtnsContainer: {
    alignItems: 'center',
    marginVertical: 50
  },
  btn_social: {
    borderColor: '#ffffff', 
    borderWidth: 3, 
    borderRadius: 12,
    width: fullWidth-20,
    paddingVertical: 6,
    marginVertical: 6
  },
  btn_fb: {
    borderColor: '#3b5998'
  },
	localBtnsContainer: {
		alignItems: 'center',
		flexDirection: 'row',
    justifyContent: 'center',
		marginVertical: 26
	},
	btn_signReg: {
		backgroundColor: 'transparent',
		borderWidth: 3,
		borderRadius: 12,
		borderColor: '#ffffff',
		width: fullWidth/2-40,
		height: 60,
    marginHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center'
	},
	btnText: {
		fontFamily: fonts.LarsseitBold,
    fontSize: 16,
    color: '#ffffff',
    letterSpacing: 3,
    marginLeft: 10,
    textTransform: 'uppercase'
	}
})