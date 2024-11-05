import React from "react";
import { View, TextInput, Button, StyleSheet, Text } from "react-native";

export default function FPassword({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Forgot Password</Text>
            <TextInput style={styles.input} placeholder="Enter your email" />

            <Button title="Recover Password" onPress={() => navigation.navigate("Login")} color="#1E90FF" />
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
});
