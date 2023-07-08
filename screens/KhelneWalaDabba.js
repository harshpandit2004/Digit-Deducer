import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import PrimaryButton from "./components/UI/PrimaryButton";
import NumberContainer from "./components/Game/NumberContainer";
import Title from "./components/UI/Title";

let minValue = 1;
let maxValue = 100;

export default function KhelneWalaDabba(props) {

  const randomNumGenerator = (min, max, exclude) => {
    const rndnm = Math.floor(Math.random() * (max - min)) + min;

    if (rndnm === exclude) {
      return randomNumGenerator(min, max, exclude);
    } else {
      return rndnm;
    }
  };

  const initialGuess = randomNumGenerator(minValue, maxValue, props.userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(()=>{
    if(currentGuess===props.userNumber){
      props.onGameOver();
    } 
  }, [currentGuess, props.userNumber, props.onGameOver])

  const nextGuessHandler = (direction) => {
    //exception handling
    if (
      (direction === "lower" && currentGuess < props.userNumber) ||
      (direction === "greater" && currentGuess > props.userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    console.log(currentGuess);

    if (direction === "lower") {
      maxValue = currentGuess;
    }
    if (direction === "greater") {
      minValue = currentGuess;
    }
    const newRandomNum = randomNumGenerator(minValue, maxValue, currentGuess);
    setCurrentGuess(newRandomNum);
    console.log(minValue, maxValue);
  };
  return (
    <View style={styles.screen}>
      <Title content={"Digit Deducer"} />
      <NumberContainer guessNum={currentGuess} />
      <View>
        <Text>Higher or Lower?</Text>
        <PrimaryButton
          buttonText={"+"}
          pressHandler={nextGuessHandler.bind(this, "greater")}
        />
        <PrimaryButton
          buttonText={"-"}
          pressHandler={nextGuessHandler.bind(this, "lower")}
        />
      </View>
      <Text>Log Rounds</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    display: "flex",
    flex: 1,
    paddingTop: 100,
  },
  text: {
    fontSize: 40,
    paddingBottom: 20,
  },
});
