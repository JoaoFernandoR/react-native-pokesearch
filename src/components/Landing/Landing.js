import React, { Component } from 'react';
import { View, Text, ImageBackground, TouchableHighlight, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
// Imagens
import imgbg from '../../assets/icons/landing.jpg'
import pokeball from '../../assets/icons/pokeball.jpg'
// estilos
import estilos from './estilos'

export default class Landing extends Component {
    render() {
    return (
        <ImageBackground source={imgbg} style={{width : '100%', height : '100%', marginTop : 20}}>
            <View style={estilos.tituloview}>
                <Image source={pokeball} style={{width : 140, height : 140}}/>
                <Text style={estilos.titulo}>
                Welcome to PokeSearch
                </Text>
                <TouchableHighlight style={estilos.btn}
                onPress={() => this.props.navigate('SearchScreen')}>
                    <Text style={estilos.btntxt}>
                        Start Searching <Icon name='search' size={23}/>
                    </Text>
                </TouchableHighlight>
            </View>
        </ImageBackground>
    ); 
 }
}


 
