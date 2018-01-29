import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';
import BarraNavegacao from './src/components/BarraNavegacao';

export default class app5 extends Component {
  render() {
    return (
      <View>
        <StatusBar backgroundColor='#CCC'/>
        <BarraNavegacao/>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('app5', () => app5);
