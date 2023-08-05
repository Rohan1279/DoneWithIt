import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {} from "@react-native-community/hooks";

import AppText from "./app/components/AppText/AppText";
import AppButton from "./app/components/AppButton";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
export default function App() {
  return (
    // <View
    //   style={{
    //     backgroundColor: "#f8f4f4",
    //     padding: 20,
    //     paddingTop: 100,
    //   }}
    // >
    //   <Card
    //     title={"Red jacket for sale"}
    //     subtitle={"$100"}
    //     image={require("./app/assets/chair.jpg")}
    //   />
    // </View>
    <MessagesScreen />
  );
}
