import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

class ServicesScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    Trying a Little More!
                </Text>
            </View>
        );
    }
}

class SettingsScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    Again, and again!
                </Text>
            </View>
        );
    }
}

export default createMaterialBottomTabNavigator({
    Services:{screen:ServicesScreen},
    Settings:{screen:SettingsScreen}
});

styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});