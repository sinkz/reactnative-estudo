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
  Button,
  Image
} from 'react-native';
import Topo from './src/components/Topo'
import Icone from './src/components/Icone'

export default class app3 extends Component {

  constructor(props) {
    super(props)
    this.state = {
      escolhaUsuario: '',
      escolhaComputador: '',
      contadorComputador: 0,
      contadorJogador: 0
    }
  }

  jokenpo(escolhaUsuario) {
    let numAleatorio = Math.floor((Math.random() * 3));
    let escolhaComputador = '';
    let contadorComputador = this.state.contadorComputador;
    let contadorJogador = this.state.contadorJogador;
    switch (numAleatorio) {
      case 0:
        escolhaComputador = 'pedra';
        break;
      case 1:
        escolhaComputador = 'papel';
        break;
      case 2:
        escolhaComputador = 'tesoura';
        break;
    }

    let resultado = '';
    if (escolhaComputador == 'pedra') {
      if (escolhaUsuario == 'pedra') 
        resultado = 'Empate';
      if (escolhaUsuario == 'papel') {
        contadorJogador++;
        resultado = 'Você ganhou';
      }
      if (escolhaUsuario == 'tesoura') {
        contadorComputador ++;
        resultado = 'Você perdeu';
      }
    }

    if (escolhaComputador == 'papel') {
      if (escolhaUsuario == 'papel') 
        resultado = 'Empate';
      if (escolhaUsuario == 'tesoura') {
        contadorJogador ++;
        resultado = 'Você ganhou';
      }
      if (escolhaUsuario == 'pedra') {
        contadorComputador ++;
        resultado = 'Você perdeu';
      }
    }

    if (escolhaComputador == 'tesoura') {
      if (escolhaUsuario == 'tesoura') 
        resultado = 'Empate';
      if (escolhaUsuario == 'pedra') {
        contadorJogador ++;
        resultado = 'Você ganhou';
      }
      if (escolhaUsuario == 'papel') {
        contadorComputador ++;
        resultado = 'Você perdeu';
      }
    }
    this.setState({escolhaUsuario: escolhaUsuario, escolhaComputador: escolhaComputador, resultado: resultado, contadorJogador: contadorJogador, contadorComputador: contadorComputador});
  }

  render() {
    return (
      <View>
        <Topo></Topo>
        <View style={styles.painelAcoes}>
          <View style={styles.btnEscolha}>
            <Button
              title="pedra"
              onPress={() => {
              this.jokenpo('pedra')
            }}/>
          </View>
          <View style={styles.btnEscolha}>
            <Button
              title="papel"
              onPress={() => {
              this.jokenpo('papel')
            }}/>
          </View>
          <View style={styles.btnEscolha}>
            <Button
              title="tesoura"
              onPress={() => {
              this.jokenpo('tesoura')
            }}/>
          </View>
        </View>
        <Text style={styles.txtResultado}>{this.state.resultado}</Text>
        <View style={styles.palco}>
          <Icone escolha={this.state.escolhaComputador} jogador='Computador'></Icone>
          <Icone escolha={this.state.escolhaUsuario} jogador='Você'></Icone>
        </View>
        <View style={styles.contador}>
          <Text style={styles.txtContador}>Você: {this.state.contadorJogador}</Text>
          <Text style={styles.txtContador}>Computador: {this.state.contadorComputador}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  btnEscolha: {
    width: 90
  },
  painelAcoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  palco: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
    paddingHorizontal: 50
  },
  txtResultado: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    height: 60,
    textAlign: 'center',
    marginTop: 10
  },
  icone: {
    alignItems: 'center',
    marginBottom: 20
  },
  txtJogador: {
    fontSize: 18
  },
  contador: {
    marginTop: 40
  },
  txtContador: {
    fontSize: 18,
    textAlign: 'center',
  }

});
AppRegistry.registerComponent('app3', () => app3);
