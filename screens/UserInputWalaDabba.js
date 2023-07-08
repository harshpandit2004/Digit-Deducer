import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Alert } from "react-native";
import PrimaryButton from "./components/UI/PrimaryButton";
import Colors from "../constants/colors";

export default function UserInputWalaDabba(props) {
  const [textEntered, setTextEntered] = useState("");

  const textChangeHandler = (e) => {
    setTextEntered(e);
    confirmHandler;
  };

  const confirmHandler = () => {
    const chosenNumber = parseInt(textEntered);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid Number!",
        "Number has to be a number between 1 and 99.",
        [{ text: "Okay", style: "destructive", onPress: resetHandler }]
      );
      console.log("Invalid Number!");
      return;
    } else {
      props.onPickNumber(chosenNumber);
    }
  };

  const resetHandler = () => {
    setTextEntered("");
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Digit - Deducer</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.numberInput}
          value={textEntered}
          maxLength={2}
          keyboardType="number-pad"
          onChangeText={textChangeHandler}
        />
        <View style={styles.butts}>
          <View style={styles.butt}>
            <PrimaryButton buttonText="Reset" pressHandler={resetHandler} />
          </View>
          <View style={styles.butt}>
            <PrimaryButton buttonText="Confirm" pressHandler={confirmHandler} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  title: {
    color: Colors.retroRed,
    fontSize: 40,
    textAlign: "center",
    paddingTop: 20,
    paddingBottom: 20,
    marginTop: 2000,
    marginHorizontal: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "serif",
    marginTop: "20%",
    borderWidth: 2,
    borderColor: Colors.retroRed,
  },
  inputContainer: {
    padding: 10,
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: Colors.retroRed,
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
    width: 80,
    height: 80,
    fontSize: 40,
    padding: 10,
    borderBottomColor: Colors.desaturatedYellow,
    borderBottomWidth: 1,
    color: Colors.desaturatedYellow,
    marginVertical: 10,
    textAlign: "center",
  },
  butt: {
    flex: 1,
  },
});
