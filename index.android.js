/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import App from './src/components/App'

class progress extends Component {
  render() {
    return (
      <App />
    );
  }
}


AppRegistry.registerComponent('progress', () => progress);
