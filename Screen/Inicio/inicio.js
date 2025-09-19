import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function Inicio() {
  const navigation = useNavigation();

  return (
    <LinearGradient colors={["#343a40", "#495057"]} style={styles.container}>
      {/* Título */}
      <Text style={styles.title}>Gestión de Citas</Text>
      <Text style={styles.subtitle}>Bienvenido al sistema médico</Text>

      {/* Botones */}
      <View style={styles.authButtons}>
        <TouchableOpacity
          style={styles.authButton}
          onPress={() => navigation.navigate("Login")}
        >
          <Ionicons name="log-in-outline" size={20} color="#fff" />
          <Text style={styles.authText}>Iniciar Sesión</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.authButton, styles.authButtonOutline]}
          onPress={() => navigation.navigate("Register")}
        >
          <Ionicons name="person-add-outline" size={20} color="#343a40" />
          <Text style={styles.authTextOutline}>Registrarse</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // centra verticalmente
    alignItems: "center", // centra horizontalmente
    padding: 20,
  },
  title: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "700",
    marginBottom: 5,
    textAlign: "center",
  },
  subtitle: {
    color: "#dee2e6",
    fontSize: 16,
    marginBottom: 40,
    textAlign: "center",
  },
  authButtons: {
    width: "100%",
    gap: 15, // separación entre botones
  },
  authButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0d6efd",
    paddingVertical: 14,
    borderRadius: 10,
    justifyContent: "center",
  },
  authButtonOutline: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#343a40",
  },
  authText: {
    color: "#fff",
    fontWeight: "600",
    marginLeft: 8,
    fontSize: 16,
  },
  authTextOutline: {
    color: "#3b73abff",
    fontWeight: "600",
    marginLeft: 8,
    fontSize: 16,
  },
});
