import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,ImageBackground, SafeAreaView } from 'react-native';
import Lottie from 'lottie-react-native';

import services from '../Animations/services.json'



export default function Home({ navigation }) {

    return (
        <ImageBackground source={require('../Images/bg.jpg')} style={styles.backgroundImage}>
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start', width: 250, height: 250,marginBottom:10}}>
                <Lottie resizeMode='contain' source={services} autoPlay loop />
            </View>
            <View style={styles.bottom}>
                <TouchableOpacity style={styles.button1}
                    onPress={() => navigation.navigate('Services')}>
                    <Text style={styles.buttonText}>Entre com seu e-mail!</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button2}
                    onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.buttonText}
                    >Cadastre-se aqui! </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
        </ImageBackground>
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
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 35,
        paddingHorizontal: 35,

    },
    button1: {
        borderColor: '#DDD',
        borderWidth: 1,
        height: 50,
        backgroundColor: '#FFF',
        borderRadius: 35,
        width: 300,
        alignItems: 'center',
        justifyContent: 'center',

    },

    buttonText: {
        fontSize: 20,
        color: '#000',

    },

    button2: {
        borderColor: '#DDD',
        borderWidth: 1,
        height: 50,
        backgroundColor: '#FFF',
        borderRadius: 35,
        width: 300,
        alignItems: 'center',
        justifyContent: 'center',
        margin:5,

    },
    backgroundImage: {
        flex:1,
        width:null,
        height:null,
    }


});
