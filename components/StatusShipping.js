import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";

export default function StatusShipping() {
  return (
    <View style={styles.container_Shipping}>
      <Feather style={styles.iconTruck} size={15} name="truck" />
      <Text style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={{ color: "#00a650", fontWeight: "500" }}>
          {" "}
          Envío gratis{" "}
        </Text>
        en millones de productos desde $3500
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container_Shipping: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    marginHorizontal: 13,
    paddingVertical: 7,
    borderRadius: 4,
    shadowColor: "gray",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  iconTruck: {
    color: "#00a650",
  },
});
