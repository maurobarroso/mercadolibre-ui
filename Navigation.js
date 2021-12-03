import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import InicioScreen from "./screens/InicioScreen";
import FavoritosScreen from "./screens/FavoritosScreen";
import MisComprasScreen from "./screens/MisComprasScreen";
import NotificacionesScreen from "./screens/NotificacionesScreen";
import MasScreen from "./screens/MasScreen";

import Constants from "expo-constants";

import {
  Ionicons,
  SimpleLineIcons,
  FontAwesome5,
  Octicons,
} from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
import SearchBarCartAndLocationClient from "./components/SearchBarCartAndLocationClient";
import LocationClient from "./components/LocationClient";

const RenderIcons = (props) => {
  let JSX;

  let { color, route, size } = props;

  switch (route.name) {
    case "Inicio":
      JSX = <Ionicons name="home-outline" size={size} color={color} />;
      break;
    case "Favoritos":
      JSX = <Ionicons name="heart-outline" size={size} color={color} />;
      break;
    case "Mis compras":
      JSX = <SimpleLineIcons name="bag" size={23} color={color} />;
      break;
    case "Notificaciones":
      JSX = <SimpleLineIcons name="bell" size={23} color={color} />;
      break;
    case "Más":
      JSX = <Ionicons name="reorder-three-outline" size={30} color={color} />;
      break;
    default:
      break;
  }

  return JSX;
};

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            return <RenderIcons color={color} size={size} route={route} />;
          },
          headerStyle: {
            backgroundColor: "#fee501",
            shadowColor: route.name == "Inicio" ? "transparent" : "#ddd",
            marginTop: Constants.statusBarHeight,
          },
        })}
      >
        <Tab.Screen
          name="Inicio"
          component={InicioScreen}
          options={{
            headerShown: false,
            headerTitle: () => (
              <View style={{ backgroundColor: "#fee501" }}>
                <SearchBarCartAndLocationClient />
                <LocationClient />
              </View>
            ),
          }}
        />
        <Tab.Screen name="Favoritos" component={FavoritosScreen} />
        <Tab.Screen name="Mis compras" component={MisComprasScreen} />
        <Tab.Screen name="Notificaciones" component={NotificacionesScreen} />
        <Tab.Screen name="Más" component={MasScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
