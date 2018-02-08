import React, {Component} from 'react';
import {StyleSheet, View, StatusBar, Image} from 'react-native';
import BarraNavegacao from './BarraNavegacao';

const detalheCliente = require('../assets/img/detalhe_cliente.png');
const clienteUm = require('../assets/img/cliente1.png');
const clienteDois = require('../assets/img/cliente2.png');

export default class CenaPrincipal extends Component {
  render() {
    return (
      <View>
        <StatusBar backgroundColor='#CCC'/>
        <BarraNavegacao/>
        <View>
          <Image source={detalheCliente}/>
          <Image source={clienteUm}/>
          <Image source={clienteDois}/>
        </View>
      </View>
    );
  }
}

const stlyes = StyleSheet.create({

})
