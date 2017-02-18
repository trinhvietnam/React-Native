/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
// import HelloWorldApp from './ui/helloworld/app';
import NavigatordApp from './ui/navigation/app';
export default class HelloWorld extends Component {
  render() {
    return (
        <NavigatordApp/>
    );
  }
}



AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
