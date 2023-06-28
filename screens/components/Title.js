import React from "react";
import { Text, StyleSheet } from "react-native";

export default function Title(props) {
  return <Text style={styles.tit}>{props.content}</Text>;
}
const styles = StyleSheet.create({
  tit: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#be0000",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "#be0000",
    padding: 10,
    width: "85%",
  },
});
