import React, {Component} from 'react';
import {View, Image} from 'react-native';

export default class Topo extends Component {
    render() {
        return (
            <View>
                <Image source={require('../../assets/jokenpo.png')}/>
            </View>
        );
    }
}
