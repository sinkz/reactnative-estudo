import React, {Component} from 'react';
import {View} from 'react-native';

export default class ListaItens extends Component {
  constructor(props) {
    super(props);
    console.log("Construtor");
  }
  componentWillMount() {
    console.log("Antes de renderizar");
  }

  componentDidMount() {
    console.log("Depois de renderizar");
  }

  render() {
    console.log("Objeto renderizado");
    return (
      <View>
        <Itens/>
        <Itens/>
        <Itens/>
      </View>
    );
  }
}
