import React from "react";

import { FlatList, Image, Text, View, StyleSheet } from "react-native";

export default function SalesGalery() {
  let arrayImagenes = [
    "https://i.imgur.com/VX3fHd3.png",
    "https://i.imgur.com/VX3fHd3.png",
    "https://i.imgur.com/VX3fHd3.png",
  ];

  const Sales = ({ imageUrl }) => {
    return (
      <Image
        source={{ uri: imageUrl }}
        style={{
          flexGrow: 1,
          width: 409,
          height: 200,
          alignItems: "center",
          marginHorizontal: 10,
          marginBottom: 10,
          borderRadius: 10,
        }}
      />
    );
  };

  const styles = StyleSheet.create({
    gallery_container: {
      paddingVertical: 1,
    },
  });

  return (
    <View style={styles.gallery_container}>
      <FlatList
        data={arrayImagenes}
        renderItem={({ item }) => <Sales imageUrl={item} />}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
