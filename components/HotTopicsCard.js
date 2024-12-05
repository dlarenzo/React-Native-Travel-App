import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

import BookButton from "./ui/BookButton";

const HotTopicsCard = ({ image, title, resort, offer, description }) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.resort}>{resort}</Text>
      <Text style={styles.offer}>{offer}</Text>
      <Text style={styles.content}>{description}</Text>
      <View>
        <BookButton>Book Now</BookButton>
      </View>
    </View>
  );
};

export default HotTopicsCard;

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
    width: 350,
    height: 250,
    borderRadius: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 28,
    textTransform: "uppercase",
  },
  resort: {
    fontSize: 24,
    color: "#555",
    marginBottom: 8,
  },
  offer: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#EFCE4A",
    marginVertical: 12,
    textTransform: "uppercase",
    width: 350,
    textAlign: "center",
  },
  content: {
    fontSize: 14,
    color: "#555",
    lineHeight: 24,
    textAlign: "center",
  },
});
