import React from 'react';
import { View, Text, StyleSheet, Platform, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function Login({ navigation }) {
    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <View style={styles.form}>
                <Text>Nome completo*</Text>
                <TextInput style={styles.input} autoCapitalize="words" />
                <Text>E-mail*</Text>
                <TextInput style={styles.input} keyboardType='email-address'
                    autoCapitalize="none" autoCorrect={false} />
                <Text>CPF*</Text>
                <TextInput style={styles.input} keyboardType='numeric' />
                <Text>Data de Nascimeto</Text>
                <TextInput style={styles.input} keyboardType='default' />
                <Text>Senha</Text>
                <TextInput style={styles.input} />
                <Text>Confirmar Senha</Text>
                <TextInput style={styles.input} />

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}> Cadastrar</Text>
                </TouchableOpacity>
            </View>

        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    form: {
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        marginTop: 20,
    },
    text: {
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 8,
    },
    input: {
        borderWidth: 2,
        borderColor: '#ddd',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        height: 44,
        marginBottom: 20,
        borderRadius: 3,

    },
    button: {
        height: 42,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
    },
    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,

    }
})

