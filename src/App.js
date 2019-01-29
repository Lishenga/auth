/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component {

  state = { loggedIn: null }

  componentWillMount() {
  firebase.initializeApp({
        apiKey: "AIzaSyAMJ1Z29DyF1Q8cvAq67lPOsp3CyKmbY0I",
        authDomain: "authentication-ff0b9.firebaseapp.com",
        databaseURL: "https://authentication-ff0b9.firebaseio.com",
        projectId: "authentication-ff0b9",
        storageBucket: "authentication-ff0b9.appspot.com",
        messagingSenderId: "669792857680"
    })

    firebase.auth().onAuthStateChanged((user) =>{
      if (user){
        this.setState({ loggedIn: true })
      }else{
        this.setState({ loggedIn: false })
      }
    })
  }

  renderContent(){

    switch (this.state.loggedIn){
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
        )
      case false:
        return <LoginForm />
      default:
        return <Spinner size='large'/>
    }

  }

  render() {
    return (
      <View style={styles.container}>
        <Header headerText="Authentication"/>
        {this.renderContent()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
