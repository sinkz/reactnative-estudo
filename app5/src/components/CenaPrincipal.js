import React, {Component} from 'react';
import {StyleSheet, View, StatusBar, Image} from 'react-native';
import BarraNavegacao from './BarraNavegacao';

const logo = require('../assets/img/logo.png');
const menuCliente = require('../assets/img/menu_cliente.png');
const menuContato = require('../assets/img/menu_contato.png');
const menuEmpresa = require('../assets/img/menu_empresa.png');
const menuServico = require('../assets/img/menu_servico.png');

export default class CenaPrincipal extends Component {
  render() {
    return (
      <View>
        <StatusBar backgroundColor='#CCC'/>
        <BarraNavegacao/>
        <View style={stlyes.logo}>
          <Image source={logo}/>
        </View>
        <View style={stlyes.menu}>
          <View style={stlyes.menuGrupo}>
            <Image style={stlyes.imgMenu} source={menuCliente}/>
            <Image style={stlyes.imgMenu} source={menuContato}/>
          </View>
          <View style={stlyes.menuGrupo}>
            <Image style={stlyes.imgMenu} source={menuEmpresa}/>
            <Image style={stlyes.imgMenu} source={menuServico}/>
          </View>
        </View>
      </View>
    );
  }
}

const stlyes = StyleSheet.create({
  logo: {
    marginTop: 30,
    alignItems: 'center'
  },
  menu: {
    alignItems: 'center'
  },
  menuGrupo: {
      flexDirection: 'row',
  },
  imgMenu: {
      margin: 10
  }
})
