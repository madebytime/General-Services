import React, { Component } from 'react';
import colors from '../styles/colors'

import { View,Text,TextInput,ScrollView,TouchableOpacity,StyleSheet,} from 'react-native';

// import { Container } from './styles';

export default class Pages extends Component {
  render() {
    return(
        <View style={styles.mainContainer}>
            <View style={styles.scrollViewContainer}>
            <ScrollView style={styles.scrollView}>
             <Text style={styles.registerHeader}>Preencha os dados corretamente:</Text>
             <Text style={styles.textLabel}>Nome:</Text>
             <TextInput style={styles.inputField}/>
             <Text style={styles.textLabel}>Sobrenome:</Text>
             <TextInput style={styles.inputField}/>
            
             <Text style={styles.textLabel}>Data de Nascimento:</Text>
             <TextInput style={styles.inputField}/>
             <Text style={styles.textLabel}>Telefone:</Text>
             <TextInput style={styles.inputField}/>
             <Text style={styles.textLabel}>E-mail:</Text>
             <TextInput style={styles.inputField}/>
             <Text style={styles.textLabel}>Senha:</Text>
             <TextInput style={styles.inputField}/>
             <Text style={styles.textLabel}>Confirmar senha:</Text>
             <TextInput style={styles.inputField}/>
             <TouchableOpacity>
                 <Text>Cadastrar</Text>
             </TouchableOpacity>
            </ScrollView>
            </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: colors.yellow02
  
    },
    scrollViewContainer: {
      marginTop: 50,
      flex: 1,
      padding: 0,
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    },
    scrollView: {
      paddingLeft: 25,
      paddingRight: 25,
      paddingTop: 20,
      flex: 1,
    },
    registerHeader: {
      fontSize: 24,
      color: colors.white,
      fontWeight: '300',
      marginBottom: 35,
      paddingLeft:20,
    },
    textLabel: {
      paddingTop:15,
      fontSize:16,
      fontWeight: '300',
      marginBottom: 10,
      color:colors.white,
      paddingLeft:20,
  },
  inputField: {
      borderBottomWidth: 2,
      paddingBottom: 5,
      paddingTop: 5,
      borderBottomColor:colors.white,
  },
  forgetContainer:{
      flex:1,
      flexDirection:'row-reverse',
      paddingTop:35,
      paddingHorizontal:5,
  },
  forgetText:{
      fontSize:16,
      fontWeight:'200',
      color:colors.white,
  },
  loginButton: {
    borderRadius:25,
    backgroundColor:colors.white,
    width:220,
    height:50,
    justifyContent:'center',
    alignItems:'center'
    
  },
  buttonText:{
      flex:1,
      fontSize:18,
      alignItems:'center',
      justifyContent:'center',
      color:colors.black,
      fontWeight:'500',
      paddingTop:10,

  },
  buttonContainer:{
      flex:1,
      paddingTop:35,
      paddingHorizontal:40,
  },
  backContainer:{
      flex:1,
      flexDirection:'row',
      paddingTop:35,
      paddingHorizontal:5,
  },
  picker:{
    paddingTop:15,
    fontSize:16,
    fontWeight: '300',
    marginBottom: 10,
    color:colors.white,
    paddingLeft:20,

  }

  })
