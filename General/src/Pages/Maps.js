import React, { Component } from 'react';
import {View } from 'react-native';
import MapView from 'react-native-maps';

export default class Maps extends Component {
    state = {
        region: null,

    };
    async componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            ({ coords: { latitude, longitude } }) => {
                this.setState({ region: { latitude, longitude, latitudeDelta: 0.0143, longitudeDelta: 0.0134 } })
            },
            () => { },
            {
                timeout: 2000,
                maximumAge: 1000,
                enableHighAccuracy: true
            }
        )
    }

    render() {
        const { region } = this.state;
        return (
            <View style={{ flex: 1 }}>
                <MapView
                    style={{ flex: 1 }}
                    region={region}
                    showsUserLocation
                    loadingEnabled
                />
            </View>
        )
    }
}
