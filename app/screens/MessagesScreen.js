import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import ListItem from "../components/ListItem";
import Constants from "expo-constants";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";
console.log(Constants);
const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/cropped_image_me.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/cropped_image_me.jpg"),
  },
];
export default function MessagesScreen() {
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => {
              console.log("Message selected", item);
            }}
          />
        )}
        ItemSeparatorComponent={() => {
          return <ListItemSeparator />;
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});
