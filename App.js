import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Switch, Text, TextInput, View } from "react-native";
import {} from "@react-native-community/hooks";
import AppText from "./app/components/AppText/AppText";
import AppButton from "./app/components/AppButton";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Icon from "./app/components/Icon";
import Screen from "./app/components/Screen";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingScreen from "./app/screens/ListingScreen";
import { useState } from "react";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";

const categories = [
  {
    label: "Furniture",
    value: 1,
  },
  {
    label: "Clothing",
    value: 2,
  },
  {
    label: "Cameras",
    value: 3,
  },
];

export default function App() {
  const [firstName, setFirstName] = useState("");
  const [isNew, setIsNew] = useState(false);
  const [category, setCategory] = useState(categories[0]);
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
    <GestureHandlerRootView style={{ flex: 1 }}>
      {/* <MessagesScreen /> */}
      {/* <Screen>
        <ListItem
          title={"Title"}
          // subTitle={"Subtitle"}
          ImageComponent={<Icon name={"email"} />}
        />
      </Screen> */}
      {/* <AccountScreen /> */}
      {/* <ListingScreen /> */}
      <Screen>
        {/* <AppTextInput icon={"email"} /> */}
        {/* <Switch value={isNew} onValueChange={setIsNew} /> */}
        {/* <AppPicker
          items={categories}
          icon="apps"
          placeholder="Category"
          selectedItem={category}
          onSelecteItem={(item) => setCategory(item)}
        />
        <AppTextInput icon={"email"} placeholder={"Email"} /> */}
        <LoginScreen />
      </Screen>
    </GestureHandlerRootView>
  );
}
