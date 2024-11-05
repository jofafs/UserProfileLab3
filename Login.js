import React from "react";
import { View, TextInput, Button, StyleSheet, Text } from "react-native";

export default function Login({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput style={styles.input} placeholder="Email" />
            <TextInput style={styles.input} placeholder="Password" secureTextEntry />

            <View style={styles.buttonContainer}>
                <Button title="Login" onPress={() => navigation.navigate("Profile")} />
            </View>
            <View style={styles.buttonContainer}>
                <Button title="Forgot Password" onPress={() => navigation.navigate("FPassword")} color="#1E90FF" />
            </View>
            <View style={styles.buttonContainer}>
                <Button title="Register" onPress={() => navigation.navigate("Register")} color="#FF6347" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 16,
    },
    title: {
        fontSize: 24,
        textAlign: "center",
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: "#ccc",
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 10,
    },
    buttonContainer: {
        marginVertical: 8,
    },
});
