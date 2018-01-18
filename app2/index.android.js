/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert
} from 'react-native';

export default class app2 extends Component {
  render() {
    return (
      <View style={styles.principal}>
        <Image source={require('./imgs/logo.png')}></Image>
        <TouchableOpacity style={styles.botao} onPress={gerarNovaFrase}>
          <Text style={styles.textoBotao}>Nova Frase</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const gerarNovaFrase = () => {
  let numeroAleatorio = Math.random();
  numeroAleatorio = Math.floor(numeroAleatorio * 5);
  
  let frases = Array();
  frases[0] = 'Estou Alegre';
  frases[1] = 'A Giovana é linda';
  frases[2] = 'A Giovana é gorda';
  frases[3] = 'A felicidade é o caminho';
  frases[4] = 'Hard Codeeee';
  
  let fraseEscolhida = frases[ numeroAleatorio ];

  Alert.alert(fraseEscolhida);
}

const styles = StyleSheet.create({
  principal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  botao: {
    backgroundColor: '#538530',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 20
  },
  textoBotao: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
});

AppRegistry.registerComponent('app2', () => app2);
