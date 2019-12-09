import React, { Component } from 'react';
import colors from '../styles/colors'
import styles from './styles/LoginStyles'
import Icon from 'react-native-vector-icons/FontAwesome'

import { View, KeyboardAvoidingView, TouchableOpacity, Text, TextInput, ScrollView } from 'react-native';

// import { Container } from './styles';

export default class Forget extends Component {
  render() {
    return (
   
      <KeyboardAvoidingView style={styles.mainContainer} behavior='height'>
        <View style={styles.scrollViewContainer}>
          <ScrollView style={styles.scrollView}>
            <Text style={styles.loginHeader}>Insira seu e-mail cadastrado:</Text>
            <Text style={styles.textLabel}>Enviaremos um e-mail de confirmação para recuperar sua senha:</Text>
            <TextInput style={styles.inputField}/>
            <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.loginButton}> 
            <Text style={styles.buttonText}>Enviar</Text>
            </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
   
    )
  }
}



