import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import InicioStack from "./src/Stack/InicioStack";
import RegisterScreen from "./Screen/Auth/RegisterScreen";
import DashboardPacientes from "./Screen/Dashboard/DashboardPacientes"; // 👈 Importamos el dashboard

import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

const Stack = createStackNavigator();

export default function App() {
  // Estado para guardar el rol del usuario (se cambia en LoginScreen)
  const [rol, setRol] = useState(null);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="InicioStack">
          <Stack.Screen
            name="InicioStack"
            component={InicioStack}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Login">
            {(props) => <LoginScreen {...props} setRol={setRol} />}
          </Stack.Screen>
          <Stack.Screen name="Register" component={RegisterScreen} />

          {/* Mostrar Dashboard si el rol es Paciente */}
          {rol === "Paciente" && (
            <Stack.Screen
              name="DashboardPacientes"
              component={DashboardPacientes}
              options={{ headerShown: false }}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d19df4ff",
  },
});
