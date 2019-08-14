import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
const psyduckloading = require('../../../assets/icons/psyduck.gif')


export default class Loader extends Component {

  render() {
    return (
      <View style={{flex : 1}}>
        <Text style={{color : 'red', textAlign : 'center', fontSize : 23, marginTop : 10}}> Não existe esse pokémon</Text>
        <Image source={psyduckloading}
            style={{ width : 400, height : 400, justifyContent:'center', alignItems: 'center'}}
        />
      </View>
    );
  }
}
