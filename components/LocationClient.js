import React from "react";
import { Text, View, StyleSheet } from "react-native";

import { Ionicons } from "@expo/vector-icons";

export default function LocationClient() {
  return (
    <View style={styles.container}>
      <View>
        <Ionicons name="location-outline" style={styles.locationIcon} />
      </View>
      <View style={styles.container_text}>
        <Text style={styles.text}>Enviar a Mauro Barroso - Dirección 123 </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 1,
    marginHorizontal: 27,
    marginVertical: 10,
  },
  container_text: {
    marginHorizontal: 3.1,
  },
  locationIcon: {
    fontSize: 20,
  },
  text: {
    fontWeight: "300",
    letterSpacing: 0.5,
  },
});
