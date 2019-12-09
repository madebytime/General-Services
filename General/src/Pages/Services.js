import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image, ScrollView, TouchableOpacity, FlatList,

} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


// import { Container } from './styles';

class Services extends Component {

  render() {
    return (
      <ScrollView>
        <View >
          <Text style={styles.Title}>
            Hōshi
         </Text>

        </View>
        <View style={styles.container} >
          <TouchableOpacity >
            <LinearGradient start={[0, 0.5]}
              end={[0.91, 0.5,]}
              colors={['#4AAE9B', '#e6e6fa']}
              style={styles.iconPadron, { borderRadius: 5, flexDirection: 'row', justifyContent: 'space-around' }}>
              <Image style={{ width: 70, height: 70 }} source={require('../Images/bartender.png')} />
              <Text style={{ fontWeight: 'bold', fontSize: 30, marginTop: 15 }}>Barmans</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <View style={styles.container} >
          <TouchableOpacity >
            <LinearGradient start={[0, 0.5]}
              end={[0.91, 0.5,]}
              colors={['#ba55d3', '#f4a460']}
              style={styles.iconPadron, { borderRadius: 5, flexDirection: 'row', justifyContent: 'space-around' }}>
              <Image style={{ width: 70, height: 70 }} source={require('../Images/hairstylist.png')} />
              <Text style={{ fontWeight: 'bold', fontSize: 30, marginTop: 15 }}>Cabelereiras</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <View style={styles.container} >
          <TouchableOpacity >
            <LinearGradient start={[0, 0.5]}
              end={[0.91, 0.5,]}
              colors={['#b0e0e6', '#d2691e']}
              style={styles.iconPadron, { borderRadius: 5, flexDirection: 'row', justifyContent: 'space-around' }}>
              <Image style={{ width: 70, height: 70 }} source={require('../Images/confectionerCakes.png')} />
              <Text style={{ fontWeight: 'bold', fontSize: 30, marginTop: 15 }}>Confeiteros </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <View style={styles.container} >
          <TouchableOpacity >
            <LinearGradient start={[0, 0.5]}
              end={[0.91, 0.5,]}
              colors={['#cd853f', '#ffd700']}
              style={styles.iconPadron, { borderRadius: 5, flexDirection: 'row', justifyContent: 'space-around' }}>
              <Image style={{ width: 70, height: 70 }} source={require('../Images/electrician.png')} />
              <Text style={{ fontWeight: 'bold', fontSize: 30, marginTop: 15 }}>Eletricistas</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <View style={styles.container} >
          <TouchableOpacity >
            <LinearGradient start={[0, 0.5]}
              end={[0.91, 0.5,]}
              colors={['#00ced1', '#0000ff']}
              style={styles.iconPadron, { borderRadius: 5, flexDirection: 'row', justifyContent: 'space-around' }}>
              <Image style={{ width: 70, height: 70 }} source={require('../Images/plumber.png')} />
              <Text style={{ fontWeight: 'bold', fontSize: 30, marginTop: 15 }}>Encanadores</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <View style={styles.container} >
          <TouchableOpacity >
            <LinearGradient start={[0, 0.5]}
              end={[0.91, 0.5,]}
              colors={['#3cb371', '#ffff00']}
              style={styles.iconPadron, { borderRadius: 5, flexDirection: 'row', justifyContent: 'space-around' }}>
              <Image style={{ width: 70, height: 70 }} source={require('../Images/Delivery.png')} />
              <Text style={{ fontWeight: 'bold', fontSize: 30, marginTop: 15 }}>Encomendas</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <View style={styles.container} >
          <TouchableOpacity >
            <LinearGradient start={[0, 0.5]}
              end={[0.91, 0.5,]}
              colors={['#708090', '#add8e6']}
              style={styles.iconPadron, { borderRadius: 5, flexDirection: 'row', justifyContent: 'space-around' }}>
              <Image style={{ width: 70, height: 70 }} source={require('../Images/photographer.png')} />
              <Text style={{ fontWeight: 'bold', fontSize: 30, marginTop: 15 }}>Fotográfos</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <View style={styles.container} >
          <TouchableOpacity >
            <LinearGradient start={[0, 0.5]}
              end={[0.91, 0.5,]}
              colors={['#20b2aa', '#6495ed']}
              style={styles.iconPadron, { borderRadius: 5, flexDirection: 'row', justifyContent: 'space-around' }}>
              <Image style={{ width: 70, height: 70 }} source={require('../Images/waiters.png')} />
              <Text style={{ fontWeight: 'bold', fontSize: 30, marginTop: 15 }}>Garçons</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <View style={styles.container} >
          <TouchableOpacity >
            <LinearGradient start={[0, 0.5]}
              end={[0.91, 0.5,]}
              colors={['#ff69b4', '#e9967a']}
              style={styles.iconPadron, { borderRadius: 5, flexDirection: 'row', justifyContent: 'space-around' }}>
              <Image style={{ width: 70, height: 70 }} source={require('../Images/makeup.png')} />
              <Text style={{ fontWeight: 'bold', fontSize: 30, marginTop: 15 }}>Makeup</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <View style={styles.container} >
          <TouchableOpacity >
            <LinearGradient start={[0, 0.5]}
              end={[0.91, 0.5,]}
              colors={[ '#c0c0c0','#696969']}
              style={styles.iconPadron, { borderRadius: 5, flexDirection: 'row', justifyContent: 'space-around' }}>
              <Image style={{ width: 70, height: 70 }} source={require('../Images/mechanic.png')} />
              <Text style={{ fontWeight: 'bold', fontSize: 30, marginTop: 15 }}>Mecânicos</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <View style={styles.container} >
          <TouchableOpacity >
            <LinearGradient start={[0, 0.5]}
              end={[0.91, 0.5,]}
              colors={['#8b4513', '#dcdcdc']}
              style={styles.iconPadron, { borderRadius: 5, flexDirection: 'row', justifyContent: 'space-around' }}>
              <Image style={{ width: 70, height: 70 }} source={require('../Images/Pedreiros.png')} />
              <Text style={{ fontWeight: 'bold', fontSize: 30, marginTop: 15 }}>Pedreiros</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

export default Services;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'space-between',



  },
  Title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 30,
    alignSelf: 'center',

  },
  iconPadron: {

    flexDirection: 'row',
    width: 330,
    height: 75,
    margin: 10,
    flex: 1,
    borderRadius: 4,
    borderWidth: 0.5,



  }
});