import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Gerador de Números Aleatórios
        </Text>
        <Button 
          title="Gerar um número randômico"
          onPress={geraNumeroAleatorio}
        />
      </View>
    );
  }
}

const geraNumeroAleatorio = () => {
  var numero_aleatorio = Math.floor(Math.random() * 10);
  alert(numero_aleatorio);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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

AppRegistry.registerComponent('app1', () => App);
