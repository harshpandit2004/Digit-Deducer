import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
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

export default function App() {
  const [userNumber, setUserNumber] = useState(null);

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
  };

  screen = <UserInputWalaDabba onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <KhelneWalaDabba numberval={userNumber} />;
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
    backgroundColor: "#e9d99d",
  },
  rootView:{
    flex:1
  },
  imgbg: {
    flex: 1,
    opacity: 0.8,
  },
});
