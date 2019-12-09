import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import colors from '../styles/colors';
import Icon from 'react-native-vector-icons/FontAwesome'

export default class InputField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            secureInput: !(props.inputType === 'text' || props.inputType === 'email'),

        };
        this.toggleShowPassword = this.toggleShowPassword.bind(this);
        this.onChangeText = this.onChangeText.bind(this);
    }

    toggleShowPassword() {
        this.setState({ secureInput: !this.state.secureInput });
    }
    onChangeText(text) {
        this.props.onChangeText(text);
        this.setState({ inputValue: text });
    }
    render() {
        const { labelText, labelTextSize, labelColor, textColor, borderBottomColor, inputType, customStyle, onChangeText } = this.props;
        const fontSize = labelTextSize || 18;
        const color = labelColor || colors.white;
        const inputColor = textColor || colors.white;
        const borderBottom = borderBottomColor || 'transparent';
        const { secureInput } = this.state;
        return (
            <View style={[customStyle, styles.wrapper]}>
                <Text style={[{ color, fontSize }, styles.label]}>{labelText}</Text>
                {inputType === 'password' ?
                    <TouchableOpacity style={styles.showButton}
                        onPress={this.toggleShowPassword}>
                        <Text style={styles.showButtonText}>
                            {secureInput ? 'Mostrar' : 'Esconder'}
                        </Text>
                    </TouchableOpacity>
                    : null}
                <TextInput
                    autoCorrect={false}
                    style={[{ fontSize, color: inputColor, borderBottomColor, }, styles.inputField]}
                    secureTextEntry={secureInput}
                    onChangeText={this.onChangeText} />
            </View>

        )
    }
}

InputField.Proptypes = {
    labelText: Proptypes.string.isRequired,
    labelTextSize: Proptypes.number,
    labelColor: Proptypes.string,
    textColor: Proptypes.string,
    borderBottomColor: Proptypes.string,
    inputType: Proptypes.string.isRequired,
    customStyle: Proptypes.object,
    onChangeText: Proptypes.func,
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },
    label: {
        fontWeight: '700',
        marginBottom: 20,
    },
    inputField: {
        borderBottomWidth: 2,
        paddingBottom: 5,
        paddingTop: 5,
    },
    showButton: {
        position: 'absolute',
        right: 0,
    },
    showButtonText: {
        color: colors.white,
        fontWeight: '700',

    }
});