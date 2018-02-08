import React, {Component} from 'react';
import {AppRegistry, StyleSheet, View} from 'react-native';
import CenaPrincipal from './src/components/CenaPrincipal';

export default class app5 extends Component {
  render() {
    return (< CenaPrincipal />);
  }
}

const styles = StyleSheet.create({});

AppRegistry.registerComponent('app5', () => app5);
