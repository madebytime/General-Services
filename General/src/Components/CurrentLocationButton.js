import React from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
} from 'react-native';
import {MaterialIcons} from '@expo/vetor-icons';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export const CurrentLocationButton = function(props) {
    const cb = props.cb ? props.cb : ()=> console.log('Callback function not passed to CurrentLocationButton!');
    const bottom = props.bottom ? props.bottom : 65;
    return (
        <View style={[styles.container, {top: HEIGHT.bottom}]} >
        <MaterialIcons
        name= "my-location"
        color="#000000"
        size= {25}
        onPress={()=> { cb() }}/>
        </View>
    )
}

const styles = StylesSheet.create ({
    container: {
        zIndex: 9,
        position: 'absolute',
        width: 45,
        height:45,
        backgroundColor: '#fff',
        left: WIDTH-70,
        borderRadius: 50,
        shadowColor:'#000000',
        elevation: 7,
        shadowRadius: 5,
        shadowOpacity: 1.0,
        justifyContent: 'space-round',
        alignItems: 'center',




    },
})