import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import Colors from "./constants/colors";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import UserInputWalaDabba from "./screens/UserInputWalaDabba";
import KhelneWalaDabba from "./screens/KhelneWalaDabba";
import GameOverScreen from "./screens/GameOverDabba";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [GameOverScreenViibility, setGameOverScreenViibility] = useState(false);

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
  };

  screen = <UserInputWalaDabba onPickNumber={pickedNumberHandler} />;

  const onGameOver = () => {
    setGameOverScreenViibility(true)
  }

  if (userNumber) {
    screen = <KhelneWalaDabba userNumber={userNumber} onGameOver={onGameOver} />;
  }

  if(GameOverScreenViibility){  
    screen = <GameOverScreen />
  }

  return (
    <View style={styles.app}>
      <ImageBackground
        imageStyle={{ opacity: 0.5 }}
        style={styles.rootView}
        source={require("./images/DALLE2-Dice-2.png")}
      >
        <SafeAreaView style={styles.rootView}>{screen}</SafeAreaView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: Colors.desaturatedYellow,
  },
  rootView:{
    flex:1
  },
  imgbg: {
    flex: 1,
    opacity: 0.8,
  },
});
