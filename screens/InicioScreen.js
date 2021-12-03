import React from "react";
import { ScrollView, Text, View } from "react-native";
import BannerSale from "../components/BannerSale";
import LocationClient from "../components/LocationClient";
import OptionsHome from "../components/OptionsHome";
import SalesGalery from "../components/SalesGalery";
import SeenRecent from "../components/SeenRecent";
import StatusShipping from "../components/StatusShipping";
import { LinearGradient } from "expo-linear-gradient";
import SearchBarCartAndLocationClient from "../components/SearchBarCartAndLocationClient";

export default function InicioScreen() {
  return (
    <View>
      <View style={{ backgroundColor: "#fee501" }}>
        <SearchBarCartAndLocationClient />
        <LocationClient />
      </View>
      <LinearGradient
        colors={[
          "#fee501",
          "#fee501",
          "#fee501",
          "#f2f2f2",
          "#f2f2f2",
          "#f2f2f2",
        ]}
      >
        <ScrollView>
          <LinearGradient
            colors={[
              "#fee501",
              "#f2f2f2",
              "#f2f2f2",
              "#f2f2f2",
              "#f2f2f2",
              "#f2f2f2",
              "#f2f2f2",
            ]}
          >
            <SalesGalery />
            <StatusShipping />
            <OptionsHome />
            <BannerSale />
            <SeenRecent />
            <SeenRecent />
            <View style={{ marginVertical: 200 }} />
          </LinearGradient>
        </ScrollView>
      </LinearGradient>
    </View>
  );
}
