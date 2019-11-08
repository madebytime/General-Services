import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';

// Importação Das Páginas.

import Home from './src/Pages/Home';
import Services from './src/Pages/Services';
import ServicesRegister from './src/Pages/ServicesRegister';
import Profile from './src/Pages/Profile';

const FirstNavGroup = createBottomTabNavigator({

    Registros: {
        screen: ServicesRegister,
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                return <Icon name="ios-create" size={24} color={tintColor} />
            }
        })
    },
    Serviços: {
        screen: Services,
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                return <Icon name="ios-build" size={24} color={tintColor} />
            }
        })
    },
    Perfil: {
        screen: Profile,
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                return <Icon name="ios-person" size={24} color={tintColor} />
            }
        })
    }
}, {
    initialRouteName: 'Serviços',
    tabBarOptions: {
        activeTintColor: '#c0392b',
        labelStyle: {
            fontSize: 14
        }
    }
})





export default createAppContainer(FirstNavGroup);