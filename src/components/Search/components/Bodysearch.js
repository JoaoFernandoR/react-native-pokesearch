import React, { Component } from 'react';
import { View, 
    Text, 
    StyleSheet, 
    ScrollView,
    Image,
    FlatList } from 'react-native';

export default class Bodysearch extends Component {
  render() {
    const {data} = this.props
    return (
    <View style={{flex : 1}}>
        <Text style={estilos.txt}> 
            # {data.id} - {data.name.toUpperCase()} 
        </Text>
        <View style={estilos.imgview}>
            <Image style={{width : 200, height : 200}} 
            source={{uri :data.sprites.front_default}} />
        </View>
      <ScrollView>
        <View style={estilos.listview}>
            <Text style={estilos.listitem}>
                altura : 
            </Text>
            <Text style={estilos.listitem}>
                {data.height / 10} m.
            </Text>
        </View>
        <View style={estilos.listview}>
            <Text style={estilos.listitem}>
                Peso : 
            </Text>
            <Text style={estilos.listitem}>
                {data.weight / 10} kg.
            </Text>
        </View>
        <Text style={{textAlign: 'center', fontSize : 20, marginVertical : 20, fontWeight: 'bold', color :'#c45653'}}>Habilidades</Text>
        <FlatList data={data.abilities}
            renderItem={({item}) => <Text style={estilos.habilityitem}>{item.ability.name}</Text>}
            keyExtractor={(item) => String(item.slot)}/>
      </ScrollView>
    </View>
    );
  }
}

const estilos = StyleSheet.create({
    txt : {
        fontSize : 28,
        textAlign : 'center',
        marginTop : 8,
        marginBottom: 15,
        fontWeight: 'bold',
    },
    imgview : {
        flex : 1,
        justifyContent : 'center',
        alignItems: 'center',
    },
    listview : {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginHorizontal: 8,
        padding : 3,
        borderBottomWidth: 1,
    },
    listitem : {
        fontSize : 20,
        letterSpacing : 2,
    },
    habilityitem : {
        textAlign: 'center', 
        fontSize : 20,
        letterSpacing : 2,
        borderBottomWidth: 1,
        marginBottom: 10,
    },
})