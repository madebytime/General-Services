import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image, ScrollView, TouchableOpacity,

} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


// import { Container } from './styles';

class Explore extends Component {

  render() {
    return (


      <ScrollView>
        <View >
          <Text style={styles.Title}>
            Hōshi
         </Text>


        </View>
        <View style={styles.container} >
          <View style={styles.iconPadron}>
            <TouchableOpacity >
              <LinearGradient start={[0, 0.5]}
                end={[0.91, 0.5]}
                colors={['#EFBB35', '#4AAE9B']}
                style={{ borderRadius: 5 }}>
                <Image style={{ width: 130, height: 130 }} source={require('../Images/mechanic.png')} />
                <Text style={{ alignSelf: 'center', fontWeight: 'bold' }}>Mecânicos</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>

          <View style={styles.iconPadron}>
            <TouchableOpacity >
              <LinearGradient start={[0, 0.5]}
                end={[0.7, 0.5]}
                colors={['#00ffff', '#4b0082', '#EFBB35']}
                style={{ borderRadius: 5 }}>
                <Image style={{ width: 130, height: 130, }} source={require('../Images/plumber.png')} />
                <Text style={{ alignSelf: 'center', fontWeight: 'bold' }}>Encanadores</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.container} >
          <View style={styles.iconPadron}>
            <TouchableOpacity >
              <LinearGradient start={[0, 0.5]}
                end={[0.91, 0.5]}
                colors={['#ff69b4', '#e9967a']}
                style={{ borderRadius: 8 }}>
                <Image style={{ width: 130, height: 130 }} source={require('../Images/makeup.png')} />
                <Text style={{ alignSelf: 'center', fontWeight: 'bold' }}>Makeups</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>

          <View style={styles.iconPadron}>
            <TouchableOpacity >
              <LinearGradient start={[0, 0.5]}
                end={[0.91, 0.5]}
                colors={['#00ffff', '#e9967a']}
                style={{ borderRadius: 5 }}>
                <Image style={{ width: 130, height: 130, }} source={require('../Images/electrician.png')} />
                <Text style={{ alignSelf: 'center', fontWeight: 'bold' }}>Eletricitas</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.container} >
          <View style={styles.iconPadron}>
            <TouchableOpacity >
              <LinearGradient start={[0, 0.5]}
                end={[0.91, 0.5]}
                colors={['#ff69b4', '#e9967a']}
                style={{ borderRadius: 8 }}>
                <Image style={{ width: 130, height: 130 }} source={require('../Images/hairstylist.png')} />
                <Text style={{ alignSelf: 'center', fontWeight: 'bold' }}>Cabeleleiras</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>

          <View style={styles.iconPadron}>
            <TouchableOpacity >
              <LinearGradient start={[0, 0.5]}
                end={[0.91, 0.5]}
                colors={['#00ffff', '#e9967a']}
                style={{ borderRadius: 5 }}>
                <Image style={{ width: 130, height: 130, }} source={require('../Images/photographer.png')} />
                <Text style={{ alignSelf: 'center', fontWeight: 'bold' }}>Fotógrafos</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.container} >
          <View style={styles.iconPadron}>
            <TouchableOpacity >
              <LinearGradient start={[0, 0.5]}
                end={[0.91, 0.5]}
                colors={['#ff69b4', '#e9967a']}
                style={{ borderRadius: 8 }}>
                <Image style={{ width: 130, height: 130 }} source={require('../Images/brickwall.png')} />
                <Text style={{ alignSelf: 'center', fontWeight: 'bold' }}>Pedreiros</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>

          <View style={styles.iconPadron}>
            <TouchableOpacity >
              <LinearGradient start={[0, 0.5]}
                end={[0.91, 0.5]}
                colors={['#00ffff', '#e9967a']}
                style={{ borderRadius: 5 }}>
                <Image style={{ width: 130, height: 130, }} source={require('../Images/waiters.png')} />
                <Text style={{ alignSelf: 'center', fontWeight: 'bold' }}>Garçons</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.container} >
          <View style={styles.iconPadron}>
            <TouchableOpacity >
              <LinearGradient start={[0, 0.5]}
                end={[0.91, 0.5]}
                colors={['#ff69b4', '#e9967a']}
                style={{ borderRadius: 8 }}>
                <Image style={{ width: 130, height: 130 }} source={require('../Images/Delivery.png')} />
                <Text style={{ alignSelf: 'center', fontWeight: 'bold' }}>Entregas</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>

          <View style={styles.iconPadron}>
            <TouchableOpacity >
              <LinearGradient start={[0, 0.5]}
                end={[0.91, 0.5]}
                colors={['#00ffff', '#e9967a']}
                style={{ borderRadius: 5 }}>
                <Image style={{ width: 130, height: 130, }} source={require('../Images/bartender.png')} />
                <Text style={{ alignSelf: 'center', fontWeight: 'bold' }}>Barman</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default Explore;

const styles = StyleSheet.create({
  container: {
    margin: 20,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  Title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 30,
    alignSelf: 'center',

  },
  iconPadron: {
    width: 100,
    height: 100,
    margin: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',


  }
});