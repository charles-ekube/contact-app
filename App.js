import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import Tabs from "./src/widgets/bottomnav/index";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
