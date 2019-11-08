import React, { Component } from 'react';
import { View,
    Text,
    StyleSheet,
    container } from 'react-native';

// import { Container } from './styles';

class Services extends Component {
  render (){
    return (
      <View style={styles.container}>
        <Text>
          Olá Services
        </Text>
      </View>
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
  }
});