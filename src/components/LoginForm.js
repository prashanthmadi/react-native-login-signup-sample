import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {View, Button} from 'react-native';

import UserInput from './UserInput';
import ButtonSubmit from './ButtonSubmit';

import usernameImg from '../assets/images/username.png';
import passwordImg from '../assets/images/password.png';

class LoginForm extends Component {

    render() {
        return (
            <View style={this.container()}>
                <View style={this.container()}>
                    <Field name="username" component={UserInput} source={usernameImg} placeholder='Email' autoCapitalize={'none'} returnKeyType={'done'} autoCorrect={false}/>
                    <Field name="password" component={UserInput} source={passwordImg} secureTextEntry={true} placeholder='Password' returnKeyType={'done'} autoCapitalize={'none'} autoCorrect={false}/>
                </View>
                <View style={this.container()}>
                    <Field name="submit" component={ButtonSubmit} type="Login" action={this.props.handleSubmit}/>
                </View>
            </View>
        );
    }

    container() {
        return {flex: 0.5, alignItems: 'center'}
    }
}

export default reduxForm({
    form: 'loginForm', // a unique identifier for this form
})(LoginForm)
