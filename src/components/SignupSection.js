import React, { Component, PropTypes } from 'react';
import Dimensions from 'Dimensions';
import {
	StyleSheet,
	View,
	Text,
} from 'react-native';

import { Actions, ActionConst } from 'react-native-router-flux';


export default class SignupSection extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.text} onPress={this.singUpPage}>Create Account</Text>
				<Text style={styles.text} onPress={this.forgotPswdPage}>Forgot Password?</Text>
			</View>
		);
	}

	singUpPage(){
		Actions.singUp();
	}

	forgotPswdPage(){
		Actions.singUp();
	}

}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
	container: {
		flex: 0.45,
		width: DEVICE_WIDTH,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems:'flex-start',
		top:20
	},
	text: {
		color: 'white',
		backgroundColor: 'transparent',
	},
});
