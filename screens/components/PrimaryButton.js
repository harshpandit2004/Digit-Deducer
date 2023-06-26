import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

export default function PrimaryButton(props) {
  const pressHandler = () => {
    console.log(props.buttonText + " button pressed");
  };

  return (
    <View style={styles.outerContainer}>
      <Pressable
        style={styles.container}
        onPress={pressHandler}
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
    backgroundColor: "#72063c",
    padding: 10,
    color: "#fff",
    elevation: 4,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
});
