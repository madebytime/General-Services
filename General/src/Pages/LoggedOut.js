import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import Lottie from 'lottie-react-native';
import * as Facebook from 'expo-facebook'
import * as firebase from 'firebase';
//Importações de Pastas
import colors from '../styles/colors';
import services from '../Animations/services.json';
import Icon from 'react-native-vector-icons/FontAwesome';
import google from '../Images/google-logo.png'
import styles from './styles/LoggedOutStyles'


const LoggedOut = (props)=> {
    facebook = async () =>{
        const {type,token} =await  Facebook.logInWithReadPermissionsAsync('432410724368577', {
            permissions:'public_profile'
        })
        if(type == 'success'){
             const credential = firebase.auth.FacebookAuthProvider.credential(token)
             firebase.auth().signInWithCredential(credential).catch(error =>{
                 console.log()
             })

        }
        props.navigation.navigate('Services')
    }    
        return (
            <View style={styles.container}>
                <View style={styles.welcomeContainer}>
                <View style={styles.loginContainer}>
                    <TouchableOpacity>
                        <Text style={styles.textLogin} >Entrar</Text>
                    </TouchableOpacity>
                </View>
                    <Lottie resizeMode='contain' source={services} autoPlay style={styles.animation} />
                    <Text style={styles.welcomeText}>Bem-vindo(a) ao Hōshi.</Text>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.facebookButton} 
                        onPress={facebook}>
                            <View style={styles.buttonTextWrapper}>
                                <Icon name='facebook-f' size={20} style={styles.facebookButtonIcon} />
                                <Text style={[{ color: colors.white }, styles.buttonText]}>Entre com o Facebook</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={[{ backgroundColor: colors.white }, styles.Buttonwrapper]}>
                            <View style={styles.buttonTextWrapper}>
                                <Image source={google} style={styles.googleButtonIcon} />

                                <Text style={styles.buttonText}>Entre com o Google</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={[{ backgroundColor: colors.white }, styles.Buttonwrapper]}>
                            <View style={styles.buttonTextWrapper}>
                                <Icon name='wrench' size={20} style={styles.iconHoshi} />
                                <Text style={styles.buttonText}>Crie sua conta Hōshi</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        );
    }


export default LoggedOut;