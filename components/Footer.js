import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Footer = () => {
  return (
    <View style={styles.footerContainer}>
      <Text>Footer</Text>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
