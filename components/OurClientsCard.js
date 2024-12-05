import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const OurClientsCard = ({ title, description, name }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{description}</Text>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

export default OurClientsCard;

const styles = StyleSheet.create({
  card: {
    // borderWidth: 1,
    // borderColor: "#ccc",
    // borderRadius: 8,
    padding: 36,
    marginVertical: 16,
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    width: 400,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginVertical: 12,
    textAlign: "center",
  },
  content: {
    fontSize: 14,
    fontStyle: "italic",
    color: "#555",
    textAlign: "center",
    width: 350,
    marginVertical: 16,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#555",
    textAlign: "center",
    width: 350,
    marginBottom: 16,
  },
});
