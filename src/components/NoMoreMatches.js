import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Button from "./Button";

const NoMoreMatches = ({ onReloadPress }) => {
  return (
    <View style={styles.container}>
      <Ionicons name="ios-moon" size={82} color="rgba(0,0,0,0.2)" />
      <Text style={styles.text}>
        No more matches for today, see you tomorrow
      </Text>
      <Button onPress={onReloadPress}>Swipe Again</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 22,
  },
  text: {
    color: "rgba(0,0,0,0.2)",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 12,
  },
});

export default NoMoreMatches;
