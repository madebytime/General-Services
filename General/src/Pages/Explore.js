import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image, ScrollView, TouchableOpacity, FlatList,

} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SearchBar } from 'react-native-elements';


// import { Container } from './styles';

class Explore extends Component {
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;
    return (
      <ScrollView>
        <View style={{ paddingHorizontal: 25 }}>
          <View>
            <Text style={styles.Title}>Hōshi</Text>
          </View>
          <View style={styles.localBar}>
            <TouchableOpacity>
              <SearchBar
                round
                placeholder="Insira sua localização aqui"
                onChangeText={this.updateSearch}
                value={search} />
            </TouchableOpacity>
          </View>
          <View style={styles.container} >
            <TouchableOpacity>
              <LinearGradient start={[0, 0.5]}
                end={[0.91, 0.5,]}
                colors={['#c0c0c0', '#696969']}
                style={styles.iconPadron, { borderRadius: 5, flexDirection: 'row', justifyContent: 'space-around' }}>
                <Image style={{ width: 70, height: 70 }} source={require('../Images/mechanic.png')} />
                <Text style={{ fontWeight: 'bold', fontSize: 30, marginTop: 15 }}>Mecânico</Text>
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
                <Text style={{ fontWeight: 'bold', fontSize: 30, marginTop: 15 }}>Eletricista</Text>
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
                <Text style={{ fontWeight: 'bold', fontSize: 30, marginTop: 15 }}>Encanador</Text>
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
          <View style={styles.container} >
            <TouchableOpacity >
              <LinearGradient start={[0, 0.5]}
                end={[0.91, 0.5,]}
                colors={['#3cb371', '#ffff00']}
                style={styles.iconPadron, { borderRadius: 5, flexDirection: 'row', justifyContent: 'space-around' }}>
                <Image style={{ width: 70, height: 70 }} source={require('../Images/Delivery.png')} />
                <Text style={{ fontWeight: 'bold', fontSize: 30, marginTop: 15 }}>Carretos</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <View style={styles.container} >
            <TouchableOpacity >
              <LinearGradient start={[0, 0.5]}
                end={[0.91, 0.5,]}
                colors={['#4AAE9B', '#e6e6fa']}
                style={styles.iconPadron, { borderRadius: 5, flexDirection: 'row', justifyContent: 'space-around' }}>
                <Image style={{ width: 70, height: 70 }} source={require('../Images/bartender.png')} />
                <Text style={{ fontWeight: 'bold', fontSize: 30, marginTop: 15 }}>Barmans e Garçons</Text>
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
                colors={['#ff69b4', '#e9967a']}
                style={styles.iconPadron, { borderRadius: 5, flexDirection: 'row', justifyContent: 'space-around' }}>
                <Image style={{ width: 70, height: 70 }} source={require('../Images/makeup.png')} />
                <Text style={{ fontWeight: 'bold', fontSize: 30, marginTop: 15 }}>Makeup</Text>
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
  },
  localBar: {
    color: "#FFFFFF",
    flex: 1,
    paddingHorizontal: 4,
    fontSize: 15
  }
});