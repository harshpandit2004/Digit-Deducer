import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  return (
    <View style={styles.rootView}>
    <ImageBackground
    imageStyle={{opacity:0.5}}
      style={styles.rootView}
      source={require("./images/DALLE2-Dice-2.png")}
    >
        <StartGameScreen />
    </ImageBackground>
      </View>
  );
}

const styles = StyleSheet.create({
  rootView: {
    flex: 1,
    backgroundColor: "#e9d99d",
  },
  imgbg: {
    flex: 1,
    opacity: 0.8,}
});
