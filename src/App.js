import React, { Component } from 'react';
import { View } from 'react-native';
// Estilo principal
import estilos from './estilos'
// Componentes
import Landing from './components/Landing/Landing'

export default class App extends Component {
  render() {
    return (
      <View style={estilos.container}>
        <Landing navigate={this.props.navigation.navigate}/>
      </View>
    );
  }
}
