import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Lottie from 'lottie-react-native';

import services from '../Animations/services.json'

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 150 }}>
                <Lottie resizeMode='contain' autoSize source={services} autoPlay loop />
            </View>
            <View style={styles.bottom}>
                <TouchableOpacity style={styles.button1}>
                    <Text style={styles.buttonText}>Logar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button2}
                    onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.buttonText}
                    >Cadastre-se</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },

    bottom: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        marginBottom: 35,
        paddingHorizontal: 35,

    },
    button1: {
        borderColor: '#000',
        borderWidth: 1,
        height: 50,
        backgroundColor: '#FFF',
        borderRadius: 7,
        width: 120,
        marginRight: 30,
        alignItems: 'center',
        justifyContent: 'center',

    },

    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',

    },

    button2: {
        borderColor: '#000',
        borderWidth: 1,
        height: 50,
        backgroundColor: '#FFF',
        borderRadius: 7,
        width: 120,
        marginLeft: 30,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',

    }


});
