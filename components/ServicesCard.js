import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const ServicesCard = ({ image, title, description }) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{description}</Text>
    </View>
  );
};

export default ServicesCard;

const styles = StyleSheet.create({
  card: {
    // borderWidth: 1,
    // borderColor: "#ccc",
    // borderRadius: 8,
    padding: 16,
    marginVertical: 16,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginVertical: 18,
  },
  content: {
    fontSize: 14,
    lineHeight: 25,
    color: "#555",
    textAlign: "center",
    width: 350,
  },
});
