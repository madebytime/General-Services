import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {TouchableHighlight, StyleSheet,Text,View} from 'react-native';
import colors from '../styles/colors';
import Icon from 'react-native-vector-icons/FontAwesome'

export default class ArrowButton extends Component{
    render(){
        const {disabled,handleNextButton } = this.props;

        const opacityStyle = disabled ? 0.2 : 0.6;
        return(
            <TouchableHighlight style={[{opacity:opacityStyle},styles.button]}>
                <Icon
                name="angle-double-right"
                size={32}
                color={colors.white}
                style={styles.icon}
                onPress={handleNextButton}
                />

            </TouchableHighlight>
        )
    }
}
ArrowButton.propTypes = {
  disabled: PropTypes.bool,
  handleNextButton: PropTypes.func,
};

const styles = StyleSheet.create({
    icon: {
        marginRight: -2,
        marginTop: -2,
      },
    button:{
        alignItems:'center',
        justifyContent:'center',
        borderRadius:50,
        width:60,
        height:60,
        backgroundColor:colors.white

    }
    
})