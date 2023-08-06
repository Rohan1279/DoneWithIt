import { FlatList, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";
import { GestureHandlerRootView } from "react-native-gesture-handler";

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
  const [refreshing, setRefreshing] = useState(false);
  const [message, setMessage] = useState(messages[0]);
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
            renderRightActions={() => {
              <View style={{ backgroundColor: "red", width: 70 }}></View>;
            }}
          />
        )}
        ItemSeparatorComponent={() => {
          return <ListItemSeparator />;
        }}
        refreshing={refreshing}
        onRefresh={() => {
          // setRefreshing(true);
          setMessage([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/cropped_image_me.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});
