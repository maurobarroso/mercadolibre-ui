import React from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function SearchBarCartAndLocationClient() {
  return (
    <View style={styles.container}>
      <View style={styles.container_iconSearch}>
        <Ionicons name="search" style={styles.iconSearch} />
      </View>

      <TextInput
        placeholder="Buscar en Mercado Libre"
        style={styles.searchBar}
      />
      <View>
        <Ionicons name="cart-outline" style={styles.iconCart} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 50,
    marginHorizontal: 30,
    backgroundColor: "#fee501",
  },
  searchBar: {
    fontWeight: "500",
    width: 300,
    backgroundColor: "white",
    padding: 8.9,
    borderBottomRightRadius: 50,
    borderTopRightRadius: 50,
    marginLeft: -2,
  },
  container_iconSearch: {
    backgroundColor: "white",
    paddingTop: 7.5,
    paddingBottom: 7.5,
    paddingHorizontal: 10,
    borderBottomLeftRadius: 50,
    borderTopLeftRadius: 50,
  },
  iconSearch: {
    color: "gray",
    fontSize: 19,
  },
  iconCart: {
    color: "#000",
    fontSize: 25,
    marginHorizontal: 3,
  },
});
