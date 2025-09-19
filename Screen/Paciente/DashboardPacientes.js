import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Iconos bonitos

export default function DashboardPacientes({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Encabezado */}
      <Text style={styles.title}>Dashboard de Pacientes</Text>
      <Text style={styles.subtitle}>Bienvenido, aquí puedes gestionar tu información</Text>

      {/* Opciones principales */}
      <View style={styles.cardContainer}>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Citas")}>
          <Ionicons name="calendar" size={40} color="#4CAF50" />
          <Text style={styles.cardText}>Mis Citas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Historial")}>
          <Ionicons name="document-text" size={40} color="#2196F3" />
          <Text style={styles.cardText}>Historial</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Perfil")}>
          <Ionicons name="person-circle" size={40} color="#FF9800" />
          <Text style={styles.cardText}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
    textAlign: "center",
  },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 15,
  },
  card: {
    width: 120,
    height: 120,
    backgroundColor: "#fff",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cardText: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
  },
});
