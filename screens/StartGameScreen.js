import React, { useState } from "react";
import { View, TextInput, StyleSheet, Alert } from "react-native";
import PrimaryButton from "./components/PrimaryButton";

export default function StartGameScreen() {
  const [textEntered, setTextEntered] = useState("");

  const textChangeHandler = (e) =>{
    setTextEntered(e);
  }

  const confirmHandler = () => {
    const chosenNumber = parseInt(textEntered);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('Invalid Number!', 'Number has to be a number between 1 and 99.', [{text: 'Okay', style: 'destructive', onPress: resetHandler}])
      console.log("Invalid Number!")
      return;
    }else{
      console.log(typeof(chosenNumber))
    }
  };

  const resetHandler = () => {
    setTextEntered("");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={textEntered}
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        onChangeText={textChangeHandler}
      />
      <View style={styles.butts}>
        <View style={styles.butt}>
          <PrimaryButton buttonText="Reset" pressHandler={resetHandler}  />
        </View>
        <View style={styles.butt}>
          <PrimaryButton buttonText="Confirm" pressHandler={confirmHandler} />
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
    backgroundColor: "#be0000",
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
    borderBottomColor: "#d76300",
    borderBottomWidth: 2,
    color: "#fff",
    marginVertical: 10,
    fontWeight: "bold",
    width: 50,
    textAlign: "center",
  },
  butt: {
    flex:1
  },
});
