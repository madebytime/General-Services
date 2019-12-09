import React, { Component } from 'react';
import colors from '../styles/colors'
import styles from './styles/LoginStyles'
import Icon from 'react-native-vector-icons/FontAwesome'

import { View, KeyboardAvoidingView, TouchableOpacity, Text, TextInput, ScrollView } from 'react-native';

// import { Container } from './styles';

export default class Login extends Component {
  render() {
    return (
   
      <KeyboardAvoidingView style={styles.mainContainer} behavior='height'>
        
      <View style={styles.forgetContainer}>
       <TouchableOpacity>
        <Text style={styles.forgetText}>Esqueceu sua senha?</Text>
       </TouchableOpacity>
       </View>
        <View style={styles.scrollViewContainer}>
          <ScrollView style={styles.scrollView}>
            <Text style={styles.loginHeader}>Acesse sua conta</Text>
            <Text style={styles.textLabel}>Endereço de e-mail:</Text>
            <TextInput style={styles.inputField}/>
            <Text style={styles.textLabel}>Senha:</Text>
            <TextInput style={styles.inputField}/>
            <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.loginButton}> 
            <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
   
    )
  }
}

<<<<<<< HEAD
=======


>>>>>>> 02d414a179df92b8e981368a96bfdc716dcc9298
