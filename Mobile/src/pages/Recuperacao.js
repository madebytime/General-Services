import React from 'react';
import { KeyboardAvoidingView, Text, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

export default function Recuperacao({ navigation }) {
    return (
        <KeyboardAvoidingView style={styles.container}
            behavior="padding"
        >
            <Text style={styles.texto}>Recuperar Senha</Text>
            <TextInput style={styles.input}
                placeholder="E-mail: "
                placeholderTextColor="#999"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false} />
            <KeyboardAvoidingView style={styles.container2}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}
                    >
                        Enviar
                </Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
            <KeyboardAvoidingView style={styles.container2}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}
                        onPress={() => navigation.navigate('Login')}
                    >
                        Voltar
               </Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
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
    container2: {
        flexDirection: 'row',
    },
    texto: {
        fontWeight: 'bold',
        marginBottom: 20,
        fontSize: 22,
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
    input: {
        borderRadius: 10,
        borderColor: '#f05a5b',
        backgroundColor: "#FFF",
        width: 250,
        height: 44,
        margin: 10,
        borderWidth: 1,
    },
});