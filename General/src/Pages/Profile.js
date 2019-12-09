import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Alert
} from 'react-native';

// Importação do NativeBase

import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Title,
  Button,
  Icon
} from 'native-base';

// Importação do React-Native Elements

import { Avatar } from 'react-native-elements';

class Profile extends Component {

  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: '#f1c40f', height: 200 }}>
          <Left style={{ marginBottom: 150 }}>
            <Icon name="md-menu" style={styles.icon} />
          </Left>
          <Body style={{ alignItems: 'center', marginLeft: 82, marginBottom: 150 }}>
            <Avatar
              size="large"
              rounded
              icon={{ name: 'user', type: 'font-awesome' }}
              activeOpacity={0.7}
              containerStyle={{ marginTop: 150 }}
            />
            <Text style={{ color: 'white' }}>Fulaninho xD</Text>
          </Body>
          <Right style={{ marginBottom: 150 }}>
            <Icon name="md-cog" style={styles.icon}  />
          </Right>
        </Header>
        <SafeAreaView style={styles.container}>
          <ScrollView>
            <View>
              <Text style={styles.container}>
                Desque
              </Text>
            </View>
          </ScrollView>
        </SafeAreaView>
      </Container>
    );
  }
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  avatar: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon:{
    marginTop:15,
    color:'#FFF'
  }
});