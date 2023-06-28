import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PrimaryButton from "./components/PrimaryButton";
import Title from "./components/Title";

export default function KhelneWalaDabba(props) {
  return (
    <View style={styles.screen}>
      <Title content={"Opponent's Guess"} />
      <View>
        <Text>Higher or Lower?</Text>
        <PrimaryButton buttonText={"+"} />
        <PrimaryButton buttonText={"-"} />
      </View>
      <Text>Log Rounds</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    paddingTop:100
  },
  text: {
    fontSize: 40,
    paddingBottom: 20,
  },
});
