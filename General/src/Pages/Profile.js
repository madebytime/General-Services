import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
<<<<<<< HEAD
  ScrollView
} from 'react-native';
import { Header, Container, Body, Card, CardItem, Content, Text } from 'native-base';
=======
  ScrollView, TouchableOpacity
} from 'react-native';
import { Container, Body, Card, CardItem, Content, Text } from 'native-base'
import colors from '../styles/colors';

import * as firebase from 'firebase'
import * as reducers from './Reducers/authReducers';
import * as actions from './Actions/authActions';


>>>>>>> 26edbdd6ce29fe0917126629a4fd78439df43447



export default class Profile extends Component {
  signOutUser = async () => {
    try {
      await firebase.auth().signOut();
    } catch (e) {
      console.log(e);
    }
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => this.signOutUser()} style={{ paddingTop: 35, flexDirection: 'row-reverse', paddingHorizontal: 20 }}>
              <Text style={{ fontSize: 16, fontWeight: '400' }}>Sair</Text>
            </TouchableOpacity>
          </View>
          <Image style={styles.avatar} source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} />
          <View style={styles.body}>
            <View style={styles.bodyContent}>
<<<<<<< HEAD
              <Text style={styles.name}>John Doe</Text>
=======
              <Text style={styles.name}>Nome do usuário</Text>
>>>>>>> 26edbdd6ce29fe0917126629a4fd78439df43447
            </View>
            <View style={styles.cardContent}>
              <Container>
                <Content>
                  <TouchableOpacity>
                    <Card style={styles.card}>
                      <CardItem style={styles.cardItem}>
                        <Body>
                          <Text style={styles.cartText}>Meus Dados</Text>
                        </Body>
                      </CardItem>
                    </Card>
                  </TouchableOpacity>
                  <Card style={styles.card}>
                    <CardItem style={styles.cardItem}>
                      <Body>
                        <Text style={styles.cartText}>Meus Cartões</Text>
                      </Body>
                    </CardItem>
                  </Card>
                  <Card style={styles.card}>
                    <CardItem style={styles.cardItem}>
                      <Body>
                        <Text style={styles.cartText}>Cupons</Text>
                      </Body>
                    </CardItem>
                  </Card>
                  <Card style={styles.card}>
                    <CardItem style={styles.cardItem}>
                      <Body>
                        <Text style={styles.cartText}>Favoritos</Text>
                      </Body>
                    </CardItem>
                  </Card>
                  <Card style={styles.card}>
                    <CardItem style={styles.cardItem} >
                      <Body>
                        <Text style={styles.cartText}>Configurações</Text>
                      </Body>
                    </CardItem>
                  </Card>
                  <Card style={styles.card}>
                    <CardItem style={styles.cardItem}>
                      <Body>
                        <Text style={styles.cartText}>Ajuda</Text>
                      </Body>
                    </CardItem>
                  </Card>
                </Content>
              </Container>
            </View>
          </View>
        </View>
      </ScrollView>
    );

  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.yellow02,
    height: 200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 130
  },
  name: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: '600',
  },
  body: {
    marginTop: 40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },
  name: {
    fontSize: 28,
    color: "#696969",
    fontWeight: "600"
  },
  info: {
    fontSize: 16,
    color: colors.yellow02,
    marginTop: 10
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
    fontSize: 18,
    fontWeight: '700',
  }
});
