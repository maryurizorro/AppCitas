import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./AuthNavegacion";
import { useEffect, useRef, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function AppNavigation() {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);
  const appState = useRef(AppState.currentState);

  const loadToken = async () => {
    try{
      const token = await AsyncStorage.getItem("userToken");
      setUserToken(token);
    } catch (error) {
    console.error("Error al cargarb el token desde AsyncStorage:", error);
    } finally {
    setIsLoading(false);
    }
  };

// se ejecuta cuando el componente se monta 
  useEffect(() =>{
    loadToken();
   },[]);
  //se ejecuta cuando hay cambio de estado en la app (inactiva/activa/Background)
  useEffect(()=> {
    const handleAppStateChange = (nextAppSTate)=>{
      if(appState.current.match(/inactive|Background/) && nextAppSTate === "active"){
        console.log ("La aplicacion ha vuelto al primer plano, verificando el token...");
        loadToken();
      
      }
      appState.current = nextAppSTate;
    
    };
    const subcription = AppState.addEventListener("change", handleAppStateChange);
    return () => { subcription.remove(); };

  return (
    <NavigationContainer>
      <AuthNavigation />
    </NavigationContainer>
  );
  },[]);
} 

