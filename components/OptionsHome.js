import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from "react-native";
import {
  MaterialIcons,
  Fontisto,
  Ionicons,
  AntDesign,
} from "@expo/vector-icons";

export default function OptionsHome() {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          console.log("pressed");
        }}
        style={{
          flex: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={styles.circleOption}>
          <MaterialIcons name="qr-code-2" size={24} color="gray" />
        </View>
        <Text style={styles.textCircle}>Pagar con QR</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          flex: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={styles.circleOption}>
          <MaterialIcons name="local-offer" size={24} color="gray" />
        </View>
        <Text style={styles.textCircle}>Ofertas</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          flex: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={styles.circleOption}>
          <Fontisto name="shopping-basket" size={24} color="gray" />
        </View>
        <Text style={styles.textCircle}>Supermercado</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flex: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={styles.circleOption}>
          <Ionicons name="car-outline" size={33} color="gray" />
        </View>
        <Text style={styles.textCircle}>Autos</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flex: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={styles.circleOption}>
          <AntDesign name="plus" size={24} color="gray" />
        </View>
        <Text style={styles.textCircle}>Ver más</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  textCircle: {
    marginTop: 3,
    fontSize: 12,
    color: "gray",
  },
  circleOption: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    shadowColor: "gray",
    shadowOffset: { width: 0, height: 1.2 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    width: 55,
    height: 55,
    borderRadius: 50,
    marginHorizontal: 13,
  },
});
