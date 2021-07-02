import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import AwayButton from "../../components/buttons/awaybtn";
import Card from "../../components/cards/index";

const AwayScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Away customers</Text>
        <AwayButton title="Back to win back" />
      </View>
      <View style={{ flex: 1 }}>
        <Card />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "#F0F0F7",
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerText: {
    color: "#43425D",
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default AwayScreen;
