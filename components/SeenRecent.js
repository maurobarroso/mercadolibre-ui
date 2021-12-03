import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

export default function SeenRecent() {
  return (
    <View style={styles.container}>
      <View style={styles.header_container}>
        <Text style={styles.header_text}>Visto recientemente</Text>
      </View>

      <View style={styles.show_product_container}>
        <View>
          <Image
            style={styles.product_image}
            source={{ uri: "https://i.imgur.com/yClPV9T.png" }}
          />
        </View>

        <View style={styles.info_product}>
          <Text style={{ color: "#3e3e3e", fontWeight: "400", fontSize: 15 }}>
            Apple Macbook Air 13 Core I5 1.8ghz 8gb 128gb Ssd
          </Text>
          <View style={styles.container_product_price}>
            <Text
              style={{
                fontWeight: "600",
                fontSize: 20,
                color: "#3e3e3e",
              }}
            >
              $146.999
            </Text>
            <Text
              style={{
                marginLeft: 6,
                fontWeight: "400",
                color: "#00a650",
              }}
            >
              5% OFF
            </Text>
          </View>
          <View style={styles.container_financing}>
            <Text style={{ fontWeight: "400", color: "#00a650" }}>
              9x $16.333 sin interés
            </Text>
          </View>
          <View style={styles.container_shipping}>
            <Text
              style={{ color: "#00a650", marginRight: 4, fontWeight: "500" }}
            >
              Envío gratis
            </Text>
            <MaterialCommunityIcons
              name="lightning-bolt"
              color="#00a650"
              size={19}
            />
            <Text
              style={{
                color: "#00a650",
                fontStyle: "italic",
                fontWeight: "800",
              }}
            >
              FULL
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.footer_container}>
        <View>
          <Text style={{ color: "#2484fa", fontWeight: "600" }}>
            Ver historial de navegación
          </Text>
        </View>
        <View>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={24}
            color="#3483fa"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 18,
    marginHorizontal: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  header_container: {
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 15,
    borderBottomWidth: 0.18,
    borderColor: "#ddd",
  },
  header_text: {
    fontSize: 18,
    fontWeight: "600",
    fontStyle: "normal",
    color: "#5e5e5e",
    letterSpacing: 0.3,
  },
  show_product_container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: 300,
    marginHorizontal: 60,
  },
  product_image: {
    width: 95,
    height: 95,
  },
  info_product: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  container_product_price: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  container_financing: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 1,
  },
  container_shipping: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 4,
  },
  footer_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderTopWidth: 0.18,
    borderColor: "#ddd",
  },
});
