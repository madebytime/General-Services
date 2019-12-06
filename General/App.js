import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome'
import React from 'react';
// Importações Das Páginas.

import LoggedOut from './src/Pages/LoggedOut';
import Services from './src/Pages/Services';
import ServicesRegister from './src/Pages/ServicesRegister';
import Profile from './src/Pages/Profile';
import Login from './src/Pages/Login';
import Register from './src/Pages/Register';
import ForgetPass from './src/Pages/ForgetPass';
import StartScreen from './src/Pages/StartScreen'


const ThirdNavGroup = createBottomTabNavigator({

    Explorar: {
        screen: Services,
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused }) => {
                return <Icon name="search" size={20} style={{margin:10}} />
            }
        })
    },
    Pedidos: {
        screen: ServicesRegister,
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused }) => {
                return <Icon name="bookmark-o" size={20} style={{margin:10}} />
            }
        })
    },
    Perfil: {
        screen: Profile,
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused }) => {
                return <Icon name="user-circle" size={20} style={{margin:10}}/>
            }
        })
    }
}, {
    initialRouteName: 'Explorar',
    tabBarOptions: {
        labelStyle: {
            fontSize: 14
        },
        tabStyle: {
            height: 44,
            alignItems: 'center',
            justifyContent: 'center',
          },
    }
})

const FirstNavGroup = createSwitchNavigator({
    StartScreen: {
        screen:StartScreen,
    },
    LoggedOut: {
        screen: LoggedOut
    },
    Services:ThirdNavGroup
}, {
    initialRouteName: 'StartScreen'
})

export default createAppContainer(FirstNavGroup);