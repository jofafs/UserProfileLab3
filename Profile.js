import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, TouchableOpacity } from "react-native";

export default function ProfileScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ alignSelf: "center", paddingTop: 50 }}>
                    <View style={styles.profileImage}>
                        <Image source={require("./assets/profile-pic.jpg")} style={styles.image} resizeMode="center" />
                    </View>
                </View>

                <View style={styles.infoContainer}>
                    <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>Judison Claude R. Nuñez</Text>
                    <Text style={[styles.text, { color: "#AEB5BC", fontSize: 14 }]}>BSIT-3R13</Text>
                </View>

                <View style={styles.leftStatsContainer}>
                    <View style={styles.statsBox}>
                        <Text style={[styles.text, { fontSize: 24 }]}>Email:</Text>
                        <Text style={[styles.text, styles.subText]}>nunez.judison@gmail.com</Text>
                    </View>
                    <View style={styles.statsBox}>
                        <Text style={[styles.text, { fontSize: 24 }]}>Phone:</Text>
                        <Text style={[styles.text, styles.subText]}>09650639596</Text>
                    </View>
                    <View style={styles.statsBox}>
                        <Text style={[styles.text, { fontSize: 24 }]}>Bio:</Text>
                        <Text style={[styles.text, styles.subText]}>yo</Text>
                    </View>
                </View>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Edit Profile</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, styles.signOutButton]}
                    onPress={() => navigation.navigate("Login")}
                >
                    <Text style={styles.buttonText}>Sign Out</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#FFF" },
    text: { color: "#52575D" },
    image: { flex: 1, height: undefined, width: undefined },
    profileImage: { width: 200, height: 200, borderRadius: 100, overflow: "hidden" },
    infoContainer: { alignSelf: "center", alignItems: "center", marginTop: 16 },
    leftStatsContainer: { marginTop: 32, alignItems: "flex-start", marginLeft: 30 },
    statsBox: { marginVertical: 10 },
    subText: { fontSize: 12, color: "#AEB5BC", fontWeight: "500" },
    button: { marginTop: 20, marginHorizontal: 30, backgroundColor: "#1E90FF", borderRadius: 5, paddingVertical: 10, alignItems: "center" },
    signOutButton: { backgroundColor: "#FF6347", marginTop: 10 },
    buttonText: { color: "#FFF", fontSize: 16, fontWeight: "500" }
});
