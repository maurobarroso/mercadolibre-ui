import React from "react";

import { FlatList, Image, Text, View, StyleSheet } from "react-native";

import Carousel from "react-native-snap-carousel";

export default function SalesGalery() {
  let arrayImagenes = [
    "https://i.imgur.com/0VsTLgH.jpg",
    "https://i.imgur.com/VX3fHd3.png",
    "https://i.imgur.com/kvl7vbs.jpg",
  ];

  const Sales = ({ imageUrl }) => {
    return (
      <Image
        source={{ uri: imageUrl }}
        style={{
          flexGrow: 1,
          width: 400,
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
      <Carousel
        ref={(c) => {
          this._carousel = c;
        }}
        data={arrayImagenes}
        renderItem={({ item }) => <Sales imageUrl={item} />}
        sliderWidth={425}
        itemWidth={420}
      />
    </View>
  );
}
