import { Image, StyleSheet, View } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText/AppText";

function Card({ title, subtitle, image }) {
  return (
    <View style={styles.card}>
      <Image resizeMode="cover" source={image} style={styles.image} />
      <View style={styles.detailesContainer}>
        <AppText style={{ marginBottom: 6 }}>{title}</AppText>
        <AppText style={{ color: colors.secondary, fontWeight: "bold" }}>
          {subtitle}
        </AppText>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  detailesContainer: {
    padding: 20,
  },

  image: {
    width: "100%",
    height: 200,
  },
});
export default Card;
