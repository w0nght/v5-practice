/* SplashScreen.js */
'use strict';

import React, { Component } from 'react';
import { StyleSheet, View, Image, } from 'react-native';
import images from '../assets/Images';

class SplashScreen extends Component {
	render() {
    return (
      <View style={styles.container}>
				<Image
					source={images.appSplashBG}
					style={styles.backgroundImage}
				/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	backgroundImage: {
		flex: 1,
		width: '100%', 
		height: '100%',
		//TODO: the size needed to rescale after testing on other device
	}
});

export default SplashScreen;