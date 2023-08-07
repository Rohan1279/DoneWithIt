import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ImageInputList from "../ImageInputList";
import ErrorMessage from "./ErrorMessage";
import { useFormikContext } from "formik";

export default function FormImagePicker({ name }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <ImageInputList
        imageUris={values[name]}
        onAddImage={(uri) => setFieldValue(name, [...values[name], uri])}
        onRemoveImage={(uri) =>
          setFieldValue(
            name,
            values[name].filter((imageUri) => imageUri !== uri)
          )
        }
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

const styles = StyleSheet.create({});
