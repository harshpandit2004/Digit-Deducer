import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import PrimaryButton from "./components/PrimaryButton";

export default function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
      />
      <View style={styles.butts}>
        <View style={styles.butt}>
          <PrimaryButton buttonText="Reset" />
        </View>
        <View style={styles.butt}>
          <PrimaryButton buttonText="Confirm" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    padding: 10,
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 10,
    backgroundColor: "#4e0329",
    elevation: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  butts: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  numberInput: {
    height: 40,
    fontSize: 20,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 10,
    fontWeight: "bold",
    width: 50,
    textAlign: "center",
  },
  butt: {
    flex:1
  },
});
