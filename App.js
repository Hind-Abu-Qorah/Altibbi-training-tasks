import React, {Component} from 'react';
import Navigator from './src/Navigation/TabNavigation';
import {
  NativeModules,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default class App extends Component {
  render() {
    return <Navigator />;
  }
}
