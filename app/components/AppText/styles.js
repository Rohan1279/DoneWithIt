import { Platform, StyleSheet } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
  text: {
    color: colors.black,
    ...Platform.select({
      ios: {
        fontSize: 20,
        fontWeight: "900",
        fontFamily: "Avenir",
      },
      android: {
        fontSize: 18,
        fontWeight: "900",
        fontFamily: "Roboto",
      },
    }),
  },
});
export default styles;
