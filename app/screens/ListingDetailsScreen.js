import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppText from "../components/AppText/AppText";
import colors from "../config/colors";
import ListItem from "../components/ListItem";

export default function ListingDetailsScreen() {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/chair.jpg")} />
      <View style={styles.details}>
        <AppText style={styles.title}>Red jacket for sale.</AppText>
        <AppText style={styles.price}>$100</AppText>
        <ListItem
          image={require("../assets/cropped_image_me.jpg")}
          title="Munir Uddin Rohan"
          subTitle="5 Listings"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  details: {
    padding: 20,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
  },
  title: {
    marginBottom: 7,
    fontSize: 24,
    fontWeight: "500",
  },
});
