/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Button} from 'react-native';

export class MeuComponente extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.teste}</Text>
      </View>
    )
  }
}

export default class app3 extends Component {
  
  constructor(props){
    super(props)
    this.state = { texto: 'Texto teste 2'};
  }

  alteraTexto(){
    this.setState({ texto: 'Outra coisa'});
  }

  render() {
    return (
      <View>
        <MeuComponente teste={this.state.texto}></MeuComponente>
        <Button title='Botão' onPress={() => {this.alteraTexto()}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

AppRegistry.registerComponent('app3', () => app3);
