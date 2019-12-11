import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  container
} from 'react-native';

import {
  Header,
  Container,
  Body,
  Card,
  CardItem,
  Content,
} from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';



import colors from '../styles/colors';

// import { Container } from './styles';

class ServicesRegister extends Component {
  render() {
    return (
      <ScrollView>
        <View style={{ paddingHorizontal: 25 }}>
          <Text style={styles.Title}>Pedidos</Text>
        </View>
        <View style={styles.cardContent}>
          <Container>
            <Content>
              <Card style={styles.card}>
                <CardItem style={styles.cardItem}>
                  <Body>
                    <Text style={styles.cartText}>Serviço agendado: Mecânico</Text>
                  </Body>
                </CardItem>
              </Card>
              <Card style={styles.card}>
                <CardItem style={styles.cardItem}>
                  <Body>
                    <Text style={styles.cartText}>Serviço agendado: Eletricista</Text>
                  </Body>
                </CardItem>
              </Card>
            </Content>
          </Container>
        </View>
      </ScrollView>
    );
  }
}

export default ServicesRegister;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  Title: {
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 30,
    alignSelf: 'center',
  },
  cardContent: {
    flex: 1,
    paddingHorizontal: 20,
  },
  card: {
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 3,
    borderLeftWidth: 5,
    backgroundColor: colors.yellow02
  },
  cardItem: {
    width: 200,
    height: 80,
    backgroundColor: colors.yellow02
  },
  cartText: {
    justifyContent: 'center',
    fontSize: 18,
    fontWeight: '400',
  }
});