import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Alert
} from 'react-native';

import { Avatar } from 'react-native-elements';

import { Block, Text } from '../Utility/';

import * as theme from '../Utility/theme';

class Profile extends Component {
  renderHeader() {
    return (
      <Block flex={0.5} column style={{ paddingHorizontal: 15, }}>
        <Block flex={false} row style={{ paddingVertical: 20, }}>
          <Block center card shadow>
            <Text h1 semibold white>
              Hoshi
            </Text>
          </Block>

        </Block>
        <Block center card shadow color="white" style={styles.headerChart}>
          <Block>
            <Avatar 
            rounded
            size="large"
            title="JD"
            onPress={() => console.log('Funcionando')}
            activeOpacity={0.7}
            containerStyle={{  }}
            />
          </Block>
          <Block>
            <Text h2 light color="black" style={{ paddingVertical: 20 }}>John Doe</Text>
          </Block>
        </Block>
      </Block>
    )
  }

  renderRequests() {
    return (
      <Block flex={0.8} column color="gray2" style={styles.requests}>
        <Text semibold>Requests</Text>
      </Block>
    );
  }

  render() {
    return (
<<<<<<< HEAD
      <SafeAreaView style={styles.safe}>
        {this.renderHeader()}
        {this.renderRequests()}
      </SafeAreaView>
=======
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
>>>>>>> 1a57daeecf8de918dfe21850419471e21b54acfa
    );
  }

}


export default Profile;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: theme.colors.tertiary,
  },
  headerChart: {
    paddingTop: 30,
    paddingBottom: 45,
    zIndex: 1
  },
<<<<<<< HEAD
  requests: {
    marginTop: -40,
    paddingTop: 55 + 20,
    paddingHorizontal: 15,
    zIndex: -1
=======
  avatar: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon:{
    marginTop:15,
    color:'#FFF'
>>>>>>> 1a57daeecf8de918dfe21850419471e21b54acfa
  }
});