import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';

// Importações de Páginas
import Profile from '../Pages/Profile';
import Services from '../Pages/Services';
import ServicesRegister from '../Pages/ServicesRegister';

class BottomBar extends React.Component {
    render() {

        return (
            <View style={styles.container}>
                <Tex>
                    BottomBar
                </Tex>
            </View>
        );
    }
}

export default createBottomTabNavigator({
    Services:{screen:ServicesScreen},
    ServicesRegister:{screen:ServicesRegisterScreen},
    Profile:{screen:ProfileScreen}
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        backgroundColor: '#fff',
    }

});