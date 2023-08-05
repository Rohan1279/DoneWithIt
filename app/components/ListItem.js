import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import React from "react";
import AppText from "./AppText/AppText";
import colors from "../config/colors";

export default function ListItem({ title, subTitle, image, onPress }) {
  return (
    <TouchableHighlight onPress={onPress} underlayColor={colors.white}>
      <View style={styles.container}>
        <Image style={styles.image} source={image} />
        <View style={{ marginVertical: 10 }}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 10,
    padding: 10,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  title: {
    fontWeight: "500",
  },
  subTitle: {
    color: colors.medium,
    fontWeight: "100",
  },
});
