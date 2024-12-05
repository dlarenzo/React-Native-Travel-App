import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ImageBackground,
} from "react-native";
import { Colors } from "../constants/styles";
import OurClientsCard from "./OurClientsCard";

// Dummy Data
const ourClientsData = [
  {
    id: "1",
    title: "Amazing Destinations!",
    description:
      "Our packages are tailored to your needs.  We take your thoughts and considerations into account to create the perfect vacation for you.",
    name: "Robert M. Downey Jr.",
  },
  {
    id: "2",
    title: "Extremely Professional",
    description:
      "Many people have trusted us to plan their dream vacations.  We have never failed to deliver an unforgettable experience.",
    name: "Catherine Zeta-Jones",
  },
  {
    id: "3",
    title: "Never booking anywhere else!",
    description:
      "We offer top notch service to all of our clients.  We are always available to answer any questions you may have.",
    name: "Peter Skaarsgard",
  },

  // Add more services as needed
];

function OurClients() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/header-background.jpg")}
        style={{ flex: 1 }}
      >
        <Text style={styles.sectionTitle}>Our Clients Say</Text>
        <FlatList
          data={ourClientsData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <OurClientsCard
              title={item.title}
              description={item.description}
              name={item.name}
            />
          )}
        />
      </ImageBackground>
    </View>
  );
}

export default OurClients;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  sectionTitle: {
    fontSize: 34,
    fontWeight: "bold",
    color: Colors.textLight,
    marginTop: 40,
    marginBottom: 25,
    alignSelf: "center",
  },
});
