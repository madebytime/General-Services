import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image, ScrollView, TouchableOpacity,
  container
} from 'react-native';

// import { Container } from './styles';

class Services extends Component {

  render() {
    return (
      <ScrollView>
        <View style={styles.Title}>
          <Text>
            Hōshi
         </Text>
        </View>
        <View style={styles.container} >
          <View style={styles.iconPadron}>
            <TouchableOpacity style={styles.Icons}>
              <Image style={{ width: 70, height: 70 }} source={require('../Images/mechanic.png')} />
              <Text>Mecânicos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Icons}>
              <Image style={{ width: 70, height: 70 }} source={require('../Images/plumber.png')} />
              <Text>Encanador</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.iconPadron}>
            <TouchableOpacity>
              <Image style={{ width: 70, height: 70 }} source={require('../Images/makeup.png')} />
              <Text>Makeup</Text>
            </TouchableOpacity><TouchableOpacity>
              <Image style={{ width: 70, height: 70 }} source={require('../Images/electrician.png')} />
              <Text>Eletricitas</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.iconPadron}>
            <TouchableOpacity>
              <Image style={{ width: 70, height: 70 }} source={require('../Images/hairstylist.png')} />
              <Text>Cabeleleira</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image style={{ width: 70, height: 70 }} source={require('../Images/photographer.png')} />
              <Text>Fotógrafos</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.iconPadron}>
            <TouchableOpacity>
              <Image style={{ width: 70, height: 70 }} source={require('../Images/brickwall.png')} />
              <Text>Confeiteros</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image style={{ width: 70, height: 70 }} source={require('../Images/waiters.png')} />
              <Text>Garçons</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Image style={{ width: 70, height: 70 }} source={require('../Images/Delivery.png')} />
            <Text>Entregas</Text>

          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={{ width: 70, height: 70 }} source={require('../Images/bartender.png')} />
            <Text>Barman</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

export default Services;

const styles = StyleSheet.create({
  container: {
    margin: 25,
    flex: 1,
    backgroundColor: '#fff',
  },
  Title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 30,
    alignSelf: 'center',
  },
  iconPadron: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',

  },
  Icons: {
    margin: 7,
    borderRadius: 10,

  }
});