import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppTextInput from "../AppTextInput";
import { useFormikContext } from "formik";
import AppText from "../AppText/AppText";
export default function AppFormField({ name, ...otherProps }) {
  const { handleChange, setFieldTouched, errors, touched } = useFormikContext();
  return (
    <>
      <AppTextInput
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        {...otherProps}
      />
      {touched[name] && errors[name] && (
        <AppText style={{ color: "red" }}>{errors[name]}</AppText>
      )}
    </>
  );
}

const styles = StyleSheet.create({});
