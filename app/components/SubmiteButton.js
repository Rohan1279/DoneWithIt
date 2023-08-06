import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppButton from "./AppButton";
import { useFormikContext } from "formik";
export default function SubmiteButton({ title }) {
  const { handleSubmit } = useFormikContext();
  return <AppButton title={title} onPress={handleSubmit} />;
}

const styles = StyleSheet.create({});
