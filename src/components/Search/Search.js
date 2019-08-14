import React, { Component } from 'react';
import { View, TextInput, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
// import * as Animatable from 'react-native-animatable'
import estilos from './estilos'
import axios from 'axios'
// Componentes
import Bodysearch from './components/Bodysearch'
import Loader from './components/Loader'
import Error from './components/Error'

export default class Search extends Component {
  state = {
    pokesearch : '',
    onCall : true,
    data : {},
    error : false
  }

  renderLoad = () => {
    if (this.state.onCall === true && this.state.error === false) return <Loader />
    if (this.state.onCall === false) return <Bodysearch data={this.state.data}/> 
  }

  getData = () => {
    this.setState({error : false, onCall : true})
    axios.get(`http://pokeapi.co/api/v2/pokemon/${this.state.pokesearch.toLowerCase()}`)
    .then((response) => {
      this.setState({data : response.data, onCall : false})
      console.log(this.state.data)
    })
    .catch((Error) => this.setState({error : true}))
  }

  handleError = () => this.state.error && <Error />

  render() {
    return (
      <View style={{flex : 1}}>
        <View style={estilos.searchbar}>
          <View style={estilos.searchbar2}>
            <Icon name='ios-search' size={28} onPress={this.getData}/>
            <TextInput placeholder='Search' 
              style={{fontSize : 24, marginLeft : 15, width : '70%'}}
              onChangeText= {(pokesearch) => this.setState({pokesearch})}
            />
          </View>
        </View>
        {this.handleError()}
        {this.renderLoad()}
      </View>
    );
  }
}

