import { Pressable, StyleSheet, Text, View } from "react-native";

import { Colors } from "../../constants/styles";
import React from "react";

function BookButton({ children, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      <View>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
}

export default BookButton;

const styles = StyleSheet.create({
  button: {
    marginTop: 16,
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 36,
    backgroundColor: Colors.bgDark,
    elevation: 2,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  pressed: {
    opacity: 0.7,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
