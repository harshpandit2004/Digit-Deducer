import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../../../constants/colors";

export default function NumberContainer(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{props.guessNum}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.retroRed,
    backgroundColor:Colors.retroRed,
    padding: 24,
    margin: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
  },
  numberText: {
  color: Colors.desaturatedYellow, 
  fontSize: 40,
  fontWeight: "bold",
  }
});
