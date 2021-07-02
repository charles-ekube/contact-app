import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from "react-native";



const AwayButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.awayButtonContainer}>
      <Text style={styles.awayButtonText}>{title}</Text>
    </TouchableOpacity>
  );

  const styles = StyleSheet.create({
    // ...
    awayButtonContainer: {
      elevation: 8,
      backgroundColor: "#9290E2",
      borderRadius: 5,
      paddingVertical: 10,
      width: 140,
      paddingHorizontal: 12,
    },
    awayButtonText: {
      fontSize: 14,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      
    }
  });


  export default AwayButton;