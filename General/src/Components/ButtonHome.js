import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import colors from '../styles/colors';

// import { Container } from './styles';

export default class ButtonHome extends Component {
    render() {
        const { text, textColor, background, handleOnPress, icon } = this.props;
        const backgroundColor = background || 'transparent';
        const color = textColor || colors.black;
        return (
            <View style={styles.container}>
            <TouchableHighlight style={[{ backgroundColor }, styles.wrapper]}
                onPress={handleOnPress}>
                <View style={styles.buttonTextWrapper}>
                    {icon}
                    <Text style={[{ color }, styles.buttonText]}>{text}</Text>
                </View>
            </TouchableHighlight>
            </View>
        );
    }
}

ButtonHome.Proptypes = {
    text: Proptypes.string.isRequired,
    textColor: Proptypes.string,
    background: Proptypes.string,
    icon: Proptypes.object,
    handleOnPress: Proptypes.func.isRequired,

}

const styles = StyleSheet.create({
    Buttonwrapper: {
        padding: 12,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: colors.white,
        marginBottom:15,
        alignItems:'center',
        
    },
    buttonText: {
        fontSize: 16,
        width: '100%',
        textAlign: 'center',

    },
    buttonTextWrapper:{
        flexDirection:'row',
        justifyContent:'flex-end'
    },
    container:{
        paddingHorizontal:20,
    }

})