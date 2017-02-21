import React, {Component} from 'react';
import { Actions } from 'react-native-router-flux';

import Logo from '../components/Logo';
import LoginForm from '../components/LoginForm';
import Wallpaper from '../components/Wallpaper';
import SignupSection from '../components/SignupSection';

export default class LoginScreen extends Component {

    handleSubmit = (values) => {
        Parse.User.logIn(values.username, values.password, {
            success: function(user) {
                Actions.homeScreen();
            },
            error: function(user, error) {
                console.warn(JSON.stringify(error));
            }
          });
    }

    render() {
        return (
            <Wallpaper>
                <Logo size={3}/>
                <LoginForm onSubmit={this.handleSubmit}/>
                <SignupSection/>
            </Wallpaper>
        );
    }
}

module.exports = LoginScreen;
