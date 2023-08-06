import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import { FlatList } from "react-native-gesture-handler";
import Icon from "../components/Icon";
import ListItemSeparator from "../components/ListItemSeparator";
const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: "red",
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: "green",
    },
  },
];

export default function AccountScreen() {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title={"Munir Uddin Rohan"}
          subTitle={"muniruddinrohan@gmail.com"}
          image={require("../assets/cropped_image_me.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          ItemSeparatorComponent={ListItemSeparator}
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              ImageComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <ListItem
        title={"Log Out"}
        ImageComponent={<Icon name={"logout"} backgroundColor={"#ffe66d"} />}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#f8f4f4",
  },
  container: {
    marginVertical: 20,
    backgroundColor: "#fff",
  },
});
