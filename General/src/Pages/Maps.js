import React from 'react';
import { StyleSheet, Text, View } from 'react native';
import { MapView } from 'expo';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            region: null,
        }
        this._getLocationAsync();
    }
    _getLocation = async () => {
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
    render() {
        return (<View styles={styles.container}>
            <Text>Página Maps</Text>
            <MapView
                initialRegion={this.state.region}
                showUserLocation={true}
                showsCompass={true}
                rotateEnabled={false}
                style={{ flex: 1 }}
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