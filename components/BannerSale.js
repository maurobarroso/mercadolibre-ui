import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function BannerSale() {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        source={{ uri: "https://i.imgur.com/IBgQACA.png" }}
        style={styles.image}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "gray",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  image: {
    width: 400,
    height: 100,
    borderRadius: 10,
  },
});
