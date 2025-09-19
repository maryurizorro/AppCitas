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

export default function RegisterScreen({ navigation }) {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [rol, setRol] = useState("Paciente");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    if (!nombre || !apellido || !email || !telefono || !password) {
      Alert.alert("Error", "Todos los campos son obligatorios");
      return;
    }

    console.log({ nombre, apellido, email, telefono, rol, password });
    Alert.alert("✔ Éxito", "Usuario registrado correctamente");
    navigation.replace("Login");
  };

  return (
    <LinearGradient colors={["#f8f9fa", "#e9ecef"]} style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.card}>
          <Text style={styles.heading}>Crear Cuenta</Text>

          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Nombre"
              placeholderTextColor="#888"
              value={nombre}
              onChangeText={setNombre}
            />
            <TextInput
              style={styles.input}
              placeholder="Apellido"
              placeholderTextColor="#888"
              value={apellido}
              onChangeText={setApellido}
            />
            <TextInput
              style={styles.input}
              placeholder="Correo electrónico"
              placeholderTextColor="#888"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              style={styles.input}
              placeholder="Teléfono"
              placeholderTextColor="#888"
              keyboardType="phone-pad"
              value={telefono}
              onChangeText={setTelefono}
            />

            {/* Dropdown de roles */}
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={rol}
                onValueChange={(itemValue) => setRol(itemValue)}
                style={styles.picker}
              >
                <Picker.Item label="Paciente" value="Paciente" />
                <Picker.Item label="Médico" value="Medico" />
                <Picker.Item label="Administrador" value="Administrador" />
              </Picker>
            </View>

            <TextInput
              style={styles.input}
              placeholder="Contraseña"
              placeholderTextColor="#888"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />

            {/* Botón Registrar */}
            <TouchableOpacity onPress={handleRegister} activeOpacity={0.8}>
              <LinearGradient
                colors={["#343a40", "#495057"]}
                style={styles.registerButton}
              >
                <Text style={styles.registerButtonText}>Registrar</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>

        {/* Link para iniciar sesión */}
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.loginLink}>
            ¿Ya tienes cuenta?{" "}
            <Text style={styles.loginLinkHighlight}>Inicia sesión</Text>
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
  registerButton: {
    padding: 16,
    borderRadius: 12,
    marginTop: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  registerButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 17,
    letterSpacing: 0.5,
  },
  loginLink: {
    textAlign: "center",
    fontSize: 15,
    marginTop: 25,
    color: "#6c757d",
  },
  loginLinkHighlight: {
    color: "#212529",
    fontWeight: "600",
  },
});