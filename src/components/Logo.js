import React, {Component, PropTypes} from 'react';
import {View, Text, Image} from 'react-native';

import logoImg from '../assets/images/logo.png';

export default class Logo extends Component {
    render() {
        return (
            <View style={this.container()}>
                <Image source={logoImg} style={this.image()}/>
                <Text style={this.text()}>Badi</Text>
            </View>
        );
    }

    image() {
        return {
					width: 30 *this.props.size,
					height: 30 *this.props.size
				}
    }

    container() {
        return{
            flex : 1,
            alignItems : 'center',
            justifyContent : 'center'
        }
    }

		text() {
			return{
				color: 'white',
				fontWeight: 'bold',
				backgroundColor: 'transparent',
				marginTop: 7 *this.props.size
			}
		}

}
