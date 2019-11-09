import React, { Component } from 'react';
import { View,
    Text,
    StyleSheet,
    Image,ScrollView,
    container } from 'react-native';

// import { Container } from './styles';

class Services extends Component {
  render (){
    return (
      <ScrollView>
       <View style={styles.container}>
         <Text style={styles.Title}>
          General Services
         </Text>
       </View>
                <View style={styles.container}>
                    <Image style={{ width: 150, height: 150 }}  source={require('../Images/Mecanico.jpg')} />
                    <Text>Procurar Mecânicos</Text>
                </View>
                <View style={styles.container}>
                    <Image style={{ width: 150, height: 150 }}  source={require('../Images/Delivery.png')} />
                    <Text>Serviços Busca e entregas</Text>
                </View>
            </ScrollView>
    );
  }
}

export default Services;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  Title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 30,
    alignSelf: 'center',
  }
});