import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

export default class Icone extends Component {
    render() {
        if (this.props.escolha == 'pedra') {
            return (
                <View style={styles.icone}>
                    <Text style={styles.txtJogador}>{this.props.jogador}</Text>
                    <Image source={require('../../assets/pedra.png')}/>
                </View>
            );
        } else if (this.props.escolha == 'papel') {
            return (
                <View style={styles.icone}>
                    <Text style={styles.txtJogador}>{this.props.jogador}</Text>
                    <Image source={require('../../assets/papel.png')}/>
                </View>
            );
        } else if (this.props.escolha == 'tesoura') {
            return (
                <View style={styles.icone}>
                    <Text style={styles.txtJogador}>{this.props.jogador}</Text>
                    <Image source={require('../../assets/tesoura.png')}/>
                </View>
            );
        } else {
            return false;
        }
    }
}

const styles = StyleSheet.create({
    icone: {
      alignItems: 'center',
      marginBottom: 20,
    },
    txtJogador: {
      fontSize: 18
    }
  
  });