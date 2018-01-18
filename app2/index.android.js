/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Image} from 'react-native';

export default class app2 extends Component {
  render() {
    return (
      <View style={styles.principal}>
        <Image style={styles.imagem} source={ require('./imgs/uvas.png') }>
        <Text>Legenda para a foto</Text>
        </Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  principal: {
    paddingTop: 40
  },
  imagem: {
    justifyContent: 'flex-end',
    padding: 5,
  }
});

AppRegistry.registerComponent('app2', () => app2);
