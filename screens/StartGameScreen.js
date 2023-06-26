import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import PrimaryButton from "./components/PrimaryButton";

export default function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput />
      <PrimaryButton buttonText="Reset" />
      <PrimaryButton buttonText="Confirm" />
    </View>
  );
}

const styles = StyleSheet.create({
    inputContainer: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100,
        marginHorizontal: 55,
        borderRadius: 10,
        backgroundColor: 'grey',
        elevation:8
    },
});