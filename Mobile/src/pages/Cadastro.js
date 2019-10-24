import React from 'react';
import { KeyboardAvoidingView, Text, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { blue, bold } from 'ansi-colors';
import { Linking } from 'expo';

export default function Cadastro({ navigation }) {
    return (
        <KeyboardAvoidingView style={styles.container}>
            <Text style={styles.texto}>General Services</Text>
            <KeyboardAvoidingView>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>
                        Cadastrar
                    </Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
            <KeyboardAvoidingView>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}
                        onPress={() => navigation.navigate('Login')}>
                        Voltar
                    </Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </KeyboardAvoidingView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    texto: {
        fontWeight: 'bold',
        marginBottom: 20,
        fontSize: 22,
    },
    input: {
        borderRadius: 10,
        borderColor: '#f05a5b',
        backgroundColor: "#FFF",
        width: 250,
        height: 44,
        margin: 10,
        borderWidth: 1,
    },
    button: {
        height: 42,
        backgroundColor: "#f05a5b",
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        margin: 5,
    },
    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
});