import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";

import HotTopicsCard from "./HotTopicsCard";

const HotTopicsData = [
  {
    id: 1,
    image: require("../assets/images/hot-topics/sri-lanka.jpg"),
    title: "Sri Lanka",
    resort: "Anantaya Resort & Spa",
    offer: "Exclusive Offer: $499",
    description:
      "Set along Negombo Beach on the Indian Ocean, this refined hotel is 5 km from colourful Angurukaramulla Temple and 4 km from St. Mary's Church, Negombo.  This place is a main tourist attraction and unforgettable",
  },
  {
    id: 2,
    image: require("../assets/images/hot-topics/bora-bora.jpg"),
    title: "Bora Bora",
    resort: "Anantaya Resort & Spa",
    offer: "Exclusive Offer: $799",
    description:
      "Set on Motu Tevairoa overlooking Mount Otemanu, this relaxed, posh islet resort is accessible only by free transfer or private boat.",
  },
];

const HotTopics = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Hot Topics</Text>
      <FlatList
        data={HotTopicsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <HotTopicsCard
            image={item.image}
            title={item.title}
            resort={item.resort}
            offer={item.offer}
            description={item.description}
          />
        )}
      />
    </View>
  );
};

export default HotTopics;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  sectionTitle: {
    fontSize: 34,
    fontWeight: "bold",
    marginBottom: 16,
    alignSelf: "center",
  },
});
