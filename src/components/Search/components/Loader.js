import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
const pikachuloading = require('../../../assets/icons/tenor.gif')


export default class Loader extends Component {

  render() {
    return (
      <View style={{flex : 1}}>
        <Image source={pikachuloading}
            style={{ width : 400, height : 400, justifyContent:'center', alignItems: 'center'}}
        />
      </View>
    );
  }
}
