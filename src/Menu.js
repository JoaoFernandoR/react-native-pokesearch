import {createAppContainer, createSwitchNavigator } from 'react-navigation'
// screens
import App from './App';
import Search from './components/Search/Search'

const meuApp = createSwitchNavigator({
    Home : {
        screen :  App
    },
    SearchScreen : {
        screen : Search
    },
}) 

export default createAppContainer(meuApp)
