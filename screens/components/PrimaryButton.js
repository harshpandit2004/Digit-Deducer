import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

export default function PrimaryButton(props) {

  return (
    <View style={styles.outerContainer}>
      <Pressable
        style={styles.container}
        onPress={props.pressHandler}
        android_ripple={{color: '#fff'}}
      >
        <Text style={styles.buttonText}>{props.buttonText}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    borderRadius: 10,
    overflow: "hidden",
    margin:5
  },
  container: {
    backgroundColor: "#e9d99d",
    padding: 20,
    elevation: 4,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
