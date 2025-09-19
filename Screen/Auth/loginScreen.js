import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Picker } from "@react-native-picker/picker";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Paciente");

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert("Error", "Por favor completa todos los campos");
      return;
    }

    console.log("Login con:", email, password, "Rol:", role);

    // 🔹 Redirección según rol
    if (role === "Paciente") {
      navigation.replace("DashboardPacientes");
    } else if (role === "Medico") {
      navigation.replace("DashboardMedicos");
    } else if (role === "Administrador") {
      navigation.replace("DashboardAdmin");
    } else {
      Alert.alert("Error", "Rol no reconocido");
    }
  };

  return (
    <LinearGradient colors={["#f8f9fa", "#e9ecef"]} style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.card}>
          <Text style={styles.heading}>Bienvenido</Text>
          <Text style={styles.subheading}>
            Ingresa tus credenciales y selecciona tu rol
          </Text>

          <View style={styles.form}>
            {/* Input Email */}
            <TextInput
              style={styles.input}
              placeholder="Correo electrónico"
              placeholderTextColor="#888"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />

            {/* Input Password */}
            <TextInput
              style={styles.input}
              placeholder="Contraseña"
              placeholderTextColor="#888"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />

            {/* Dropdown de roles */}
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={role}
                onValueChange={(itemValue) => setRole(itemValue)}
                style={styles.picker}
              >
                <Picker.Item label="Paciente" value="Paciente" />
                <Picker.Item label="Médico" value="Medico" />
                <Picker.Item label="Administrador" value="Administrador" />
              </Picker>
            </View>

            {/* Olvidaste contraseña */}
            <TouchableOpacity
              style={styles.forgotPasswordContainer}
              onPress={() =>
                Alert.alert("Recuperar Contraseña", "Funcionalidad en desarrollo")
              }
            >
              <Text style={styles.forgotPassword}>
                ¿Olvidaste tu contraseña?
              </Text>
            </TouchableOpacity>

            {/* Botón Ingresar */}
            <TouchableOpacity onPress={handleLogin} activeOpacity={0.8}>
              <LinearGradient
                colors={["#343a40", "#495057"]}
                style={styles.loginButton}
              >
                <Text style={styles.loginButtonText}>Ingresar</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>

        {/* Link para registrarse */}
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={styles.registerLink}>
            ¿No tienes cuenta?{" "}
            <Text style={styles.registerLinkHighlight}>Crear cuenta</Text>
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 25,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 28,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 5,
  },
  heading: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 28,
    color: "#212529",
    marginBottom: 6,
  },
  subheading: {
    textAlign: "center",
    fontSize: 15,
    color: "#6c757d",
    marginBottom: 20,
  },
  form: {
    marginBottom: 10,
  },
  input: {
    width: "100%",
    backgroundColor: "#f1f3f5",
    padding: 14,
    borderRadius: 12,
    marginTop: 15,
    borderWidth: 1,
    borderColor: "#dee2e6",
    fontSize: 16,
    color: "#212529",
  },
  pickerContainer: {
    marginTop: 15,
    backgroundColor: "#f1f3f5",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#dee2e6",
    overflow: "hidden",
  },
  picker: {
    height: 48,
    color: "#212529",
  },
  forgotPasswordContainer: {
    marginTop: 12,
    marginBottom: 18,
  },
  forgotPassword: {
    fontSize: 14,
    color: "#495057",
    textAlign: "right",
    fontWeight: "500",
  },
  loginButton: {
    padding: 15,
    borderRadius: 12,
    marginTop: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  loginButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 17,
    letterSpacing: 0.5,
  },
  registerLink: {
    textAlign: "center",
    fontSize: 15,
    marginTop: 25,
    color: "#6c757d",
  },
  registerLinkHighlight: {
    color: "#212529",
    fontWeight: "600",
  },
});
