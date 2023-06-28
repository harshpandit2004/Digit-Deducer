import React, { useState } from "react";
import { View, TextInput, StyleSheet, Alert } from "react-native";
import PrimaryButton from "./components/PrimaryButton";

export default function UserInputWalaDabba(props) {
  const [textEntered, setTextEntered] = useState("");

  const textChangeHandler = (e) =>{
    setTextEntered(e);
    confirmHandler;
  }

  const confirmHandler = () => {
    const chosenNumber = parseInt(textEntered);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('Invalid Number!', 'Number has to be a number between 1 and 99.', [{text: 'Okay', style: 'destructive', onPress: resetHandler}])
      console.log("Invalid Number!")
      return;
    }else{
      props.onPickNumber(chosenNumber)
    }
  };

  const resetHandler = () => {
    setTextEntered("");
  }

  return (
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
    width: 80,
    height: 80,
    fontSize: 40,
    padding: 10,
    borderBottomColor: "#e9d99d",
    borderBottomWidth: 1,
    color: "#e9d99d",
    marginVertical: 10,
    textAlign: "center",
  },
  butt: {
    flex:1
  },
});
