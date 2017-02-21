/* @flow */

import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

import Logo from '../components/Logo';
import SingUpForm from '../components/SingUpForm';
import Wallpaper from '../components/Wallpaper';
import { Actions } from 'react-native-router-flux';


export default class SignUp extends Component {

  handleSubmit = (values) => {
      var user = new Parse.User();
      user.set("username", values.email);
      user.set("email", values.email);
      user.set("password", values.password);
      user.set("phone", values.phoneNumber);

      user.signUp({ ACL: new Parse.ACL() }, {
        success: function(user) {
          Actions.loginScreen();
        },
        error: function(user, error) {
          console.warn("Error: " + error.message);
        }
      });

   }

    render() {
        return (
          <Wallpaper>
            <Logo size={2}/>
            <SingUpForm onSubmit={this.handleSubmit}/>
          </Wallpaper>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    }
});
