import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import colors from '../styles/colors';
import Lottie from 'lottie-react-native'
import loading from '../Animations/loading.json';
import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAy-8iXPmD2ygJzNrtQn7qqO_Wl-9bhbSI",
    authDomain: "hoshiapp-2050d.firebaseapp.com",
    databaseURL: "https://hoshiapp-2050d.firebaseio.com",
    projectId: "hoshiapp-2050d",
    storageBucket: "hoshiapp-2050d.appspot.com",
    messagingSenderId: "204377995351",
    appId: "1:204377995351:web:3b037572d3cab6ef5b8b12",
    measurementId: "G-E4PYC5JRHE"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// import { Container } from './styles';

const StartScreen = (props) => {
    const tryLogin = async () => {
        try {
            await firebase.auth().onAuthStateChanged(user => {
                if (user != null) {
                    console.log('Usuário logado!!')
                    props.navigation.navigate('Services')
                } else {
                    console.log('Usuário não logado!!');
                    props.navigation.navigate('LoggedOut')
                }
            })
        } catch{
            console.log('Error')
        }
    }

    useEffect(() => {
        tryLogin()
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.textLoading}> Carregando informações...</Text>
            <Lottie resizeMode='contain' source={loading} autoPlay loop style={styles.animation} speed={1.2} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white
    },
    animation: {
        width: 280,
    },
    textLoading: {
        fontSize: 20,
        fontWeight: '700',
        color: colors.yellow02,
        marginBottom: 5,
    }
})

export default StartScreen;