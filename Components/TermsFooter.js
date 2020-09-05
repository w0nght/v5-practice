/*TermsFooter.js*/

import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, } from 'react-native';
import fonts from '../src/assets/Fonts';

class TermsFooter extends Component {
  render() {
    return (
			<View style={styles.footerTextCont}>
				<Text style={styles.instructions}>By signing up, you agree to FanTipper's</Text>
					<View style={styles.footerBtnCont}>
						<TouchableOpacity>
							<Text style={[styles.instructions, styles.instructionsLinks]}>T&C</Text>
						</TouchableOpacity>
						<Text style={styles.instructions}>'s and </Text>
						<TouchableOpacity>
							<Text style={[styles.instructions, styles.instructionsLinks]}>Privacy Policy</Text>
						</TouchableOpacity>
						<Text style={styles.instructions}>.</Text>
					</View>
			</View>
    );
  }
}

const styles = StyleSheet.create({
	footerTextCont: {
		alignItems: 'center',
		marginVertical: 20
	},
	footerBtnCont: {
		flexDirection: 'row',
	},
	instructions: {
		fontFamily: fonts.Larsseit,
		fontSize: 16,
		color: '#939393',
		lineHeight: 26
	},
	instructionsLinks: {
		textDecorationLine: 'underline',
	},
});


export default TermsFooter;