import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import firebase from 'react-native-firebase';

const background = require('./src/assets/bg1.jpg');

export default class App extends Component < {} > {
  state = {
    email: '',
    password: '',
    isAuthenticated: false
  }

  login = async() => {
    const {email, password} = this.state;
    try {
      const user = await firebase
        .auth()
        .signInAndRetrieveDataWithEmailAndPassword(email, password);

      this.setState({isAuthenticated: true});
      console.log(user);
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    return (
      <ImageBackground
        style={{
        backgroundColor: '#ccc',
        flex: 1,
        width: '100%',
        resizeMode: 'stretch',
        height: '100%',
        justifyContent: 'center'
      }}
        source={background}>
        <View style={styles.container}>
          <TextInput
            underlineColorAndroid={'transparent'}
            style={styles.input}
            placeholder="Digite seu e-mail"
            value={this.state.email}
            onChangeText={email => this.setState({email})}/>

          <TextInput
            underlineColorAndroid={'transparent'}
            style={styles.input}
            placeholder="Digite sua senha"
            value={this.state.password}
            onChangeText={password => this.setState({password})}/>

          <TouchableOpacity style={styles.button} onPress={this.login}>
            <Text style={styles.buttonText}>Logar</Text>
          </TouchableOpacity>

          {this.state.isAuthenticated
            ? <Text>Logado Com Sucessp</Text>
            : null}
        </View>
      </ImageBackground >

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  button: {
    height: 45,
    backgroundColor: '#069',
    alignSelf: 'stretch',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    height: 45,
    backgroundColor: '#FFF',
    alignSelf: 'stretch',
    borderColor: '#EEE',
    borderWidth: 1,
    paddingHorizontal: 20,
    marginBottom: 10
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold'
  }
});
