import React from 'react';
import { StyleSheet, Text, View } from 'react native';
import { MapView } from 'expo';

import {CurrentLocationButton }  from '.components/DestinationButton'
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            region: null,
        }
        this._getLocationAsync();
    }
    _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
            if (status !== 'granted')
            console.log('Permission to access location was denied.');

        let location = await Location.getCurrentPositionAsync({ enabledHighaccuracy: true });
        let region = {
            latitude: location.coords.latiude,
            longitude: location.coords.longitude,
            latiudeDelta: 0.045,
            longitudeDelta: 0.045
        }
        this.setState({ region: region })
    }
    centerMap() {
        const { latitude,
            longitude,
            latitudeDelta,
            longitudeDelta } = this.state.region   
    this.map.animateToRegion({
        latitude,
        longitude
        latitudeDelta,
        longitudeDelta,
    })    
    }
    render() {
        return (<View styles={styles.container}>
            <CurrentLocationButton/>
            <Text>Página Maps</Text>
            <MapView
                initialRegion={this.state.region}
                showUserLocation={true}
                showsCompass={true}
                rotateEnabled={false}
                ref= {(map) => {this.map = map}}
                style={{ flex: 1, zIndex: 0 }}
            />
        </View>
        );

    }
}
const styles = StyleSheet.creat({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});