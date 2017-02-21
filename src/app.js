import React, {Component} from 'react';
import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { Provider } from 'react-redux'
import {Scene, Router} from 'react-native-router-flux';
import { Actions } from 'react-native-router-flux';

import LoginScreen from './screens/login';
import HomeScreen from './screens/home';
import SingUp from './screens/signup';

var Parse = require('parse/react-native');
const reducers = {
  form: formReducer
}
const reducer = combineReducers(reducers)
const store = createStore(reducer)

function setup() : ReactClass < {} > {
    Parse.initialize("131627da-2461-4b90-904c-350b02a118c3");
    Parse.serverURL = 'https://parsesampleapp.azurewebsites.net/parse';
    window.Parse = Parse;

    class Badi extends Component {

        async isLoggedIn() {
          const user = await Parse.User.currentAsync();
          if(user){
            Actions.homeScreen();
          }else{
            Actions.loginScreen();
          }
        }

         render() {
           this.isLoggedIn();

            return (
              <Provider store={store}>
                <Router>
                    <Scene key="root">
                        <Scene key="loginScreen" component={LoginScreen} animation='fade' hideNavBar={true} initial={true}/>
                        <Scene key="singUp" component={SingUp} animation='fade' hideNavBar={true}/>
                        <Scene key="homeScreen" component={HomeScreen} animation='fade' hideNavBar={true}/>
                    </Scene>
                </Router>
              </Provider>
            );
        }
    }

    return Badi;
}

module.exports = setup;
