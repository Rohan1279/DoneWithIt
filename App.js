import React, { useEffect, useState } from "react";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import ListItem from "./app/components/lists/ListItem";
import Screen from "./app/components/Screen";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { Button, Image } from "react-native";
import ImageInput from "./app/components/ImageInput";
export default function App() {
  const [image, setImage] = useState(null);
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) alert("You need to enable permission to access library");
  };
  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();

      if (!result.canceled) setImage(result.uri);
    } catch (error) {
      console.log("Error reading an image", error);
    }
  };
  useEffect(() => {
    requestPermission();
  }, []);

  return (
    <Screen>
      {/* <Image source={{ uri: image }} style={{ width: 200, height: 200 }} /> */}
      <ImageInput imageUri={image} onChangeImage={(uri) => setImage(uri)} />
    </Screen>
  );
}
