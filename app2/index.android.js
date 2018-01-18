/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';

export default class app2 extends Component {
  render() {
    return (
      <View style={styles.estiloView}>
        <Text style={styles.estiloTexto}>A</Text>
        <Text style={styles.estiloTexto}>B</Text>
        <Text style={styles.estiloTexto2}>C</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  estiloTexto: {
    fontSize: 40,
    backgroundColor: '#08509B',
    height: 60,
    width: 60
  },
  estiloTexto2: {
    fontSize: 40,
    backgroundColor: '#2A48fA',
    height: 60,
    width: 60
  },
  estiloView: {
    backgroundColor: 'skyblue',
    height: 300,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column'
  }
});

AppRegistry.registerComponent('app2', () => app2);
