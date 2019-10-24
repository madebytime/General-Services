import React from 'react';
import { KeyboardAvoidingView, Text, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { blue, bold } from 'ansi-colors';
import { Linking } from 'expo';

export default function Login({ navigation }) {
    return (
        <KeyboardAvoidingView style={styles.container}
            behavior="padding"
        >
            <Text style={styles.texto}>General Services</Text>
            <TextInput style={styles.input}
                placeholder="E-mail: "
                placeholderTextColor="#999"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false} />
            <TextInput style={styles.input}
                placeholder="Senha: "
                placeholderTextColor="#999"
                secureTextEntry={true} />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}
                    onPress={() => navigation.navigate('Cadastro')}>
                    Cadastre-se</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.recuperar}>
                <Text style={styles.recuperarText}
                    onPress={() => navigation.navigate('Recuperacao')}>
                    Recuperar Senha
            </Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFf',
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
    recuperar: {
        backgroundColor: "#FFF",
        width: 150,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        margin: 22,
    },
    recuperarText: {
        color: '#00008b',
    },
});