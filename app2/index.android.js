/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class app2 extends Component {
  render() {
    return (
      <View style={styles.principal}>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textoBotao}>Clique Aqui</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const botaoPressionado = () =>{
  alert("Botão pressionado");
}
const styles = StyleSheet.create({
  principal: {
    paddingTop: 40
  },
  botao: {
    backgroundColor: '#48BBEC',
    padding: 10,
    borderColor: "#1d8eb8",
    borderWidth: 1,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.4
  },
  textoBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center'
  }
});

AppRegistry.registerComponent('app2', () => app2);
