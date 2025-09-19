import { View, Text } from "react-native"
import{userState, useEffect} from "react"
import { View, Text, StyleSheet, ActivityIndicator, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BottomComponent from "../../Component/BottomComponent";
import api from "../../src/Services/conexion";

export default function PerfilScreen() {
    const [usuario, setUsuario] = useState(null);
    const [cargando, setCargando] = useState(true);

        useEffect(() => {
            const cargarPerfil = async () => {
                try {
                    const token = await AsyncStorage.getItem("userToken");
                    if (!token){
                        Alert.alert("No se encontró token del usurio, requerido iniciar sesión.");
                        return;
                    }
                    const response = await api.get("/me");
                    setUsuario(response.data);
                } catch(error) {
                    console.error("Error al cargar el perfil:", error);
                    if(error.isAuthError || error.shoulRedirectToLogin){
                        console.log("Error de autenticacion manejado por el interceptor, redirigiendo a login...");
                        return;
                    }
                    if(error.response){
                        Alert.alert("error del servidor", `Error ${error.response.status}: ${error.response.data.message || "Ocurrió un error al cargar el perfil."}`);
                        [
                            {
                                text: "OK",
                                onPress: async () => {
                                    await AsyncStorage.removeItem("userToken");
                                }
                            }
                        ];
                    } else if(error.request){
                        Alert.alert("Error de red", "No se pudo conectar al servidor. Por favor, verifica tu conexión a internet.");
                        [
                            {
                                text: "OK",
                                onPress: async ()=>{
                                    await AsyncStorage.removeItem("userToken");
                                }
                            }
                        ];
                    } else {
                        Alert.alert(
                            "error",
                            "ocurrio en un error inesperado al cargar el perfil.",
                            [
                                {
                                    text: "OK",
                                    onPress: async ()=>{
                                        await AsyncStorage.removeItem("userToken");
                                    }
                                }
                            ]
                        );
                    }
                } finally {
                    setCargando(false);
                }
            };
            cargarPerfil();
        }, []);
   
       if (!usuario){
            return(
                <View style={StyleSheet.container}>
                <Text style={StyleSheet.errorText}>Perfil de usuario</Text>
                <View style={styles.containerPerfil}>
                    <Text style={styles.errorText}> No se pudo cargar el perfil</Text>
                </View>
                </View>
            );
       }

       return(
        <View style={styles.container}>
            <Text style={styles.title}>Perfil de Usuario</Text>
            <View style={styles.containerPerfil}>
                <Text style={styles.label}>Nombre: {usuario.name}</Text>
                <Text style={styles.label}>Email: {usuario.email}</Text>
            </View>
        </View>

       );
    }
