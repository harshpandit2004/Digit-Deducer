import React from "react";
import { Text, StyleSheet } from "react-native";
import Colors from "../../../constants/colors";

export default function Title(props) {
  return <Text style={styles.tit}>{props.content}</Text>;
}
const styles = StyleSheet.create({
  tit: {
    color: Colors.retroRed,
    fontSize: 40,
    textAlign: "center",
    paddingTop: 20,
    paddingBottom: 20,
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "serif",
    marginTop: "20%",
    borderWidth: 2,
    width:"80%",
    borderColor: Colors.retroRed,
  },
});
