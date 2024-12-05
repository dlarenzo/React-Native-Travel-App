import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  FlatList,
} from "react-native";
import React from "react";
import ServicesCard from "./ServicesCard";

const servicesData = [
  {
    id: "1",
    image: require("../assets/images/services/ruler.png"),
    title: "Tailor-Made Packages",
    description:
      "Our packages are tailored to your needs.  We take your thoughts and considerations into account to create the perfect vacation for you.",
  },
  {
    id: "2",
    image: require("../assets/images/services/suitcase.png"),
    title: "Best Experience",
    description:
      "Many people have trusted us to plan their dream vacations.  We have never failed to deliver an unforgettable experience.",
  },
  {
    id: "3",
    image: require("../assets/images/services/diamond.png"),
    title: "Exquisite Service",
    description:
      "We offer top notch service to all of our clients.  We are always available to answer any questions you may have.",
  },
  {
    id: "4",
    image: require("../assets/images/services/resort.png"),
    title: "Handpicked Resorts",
    description:
      "We handpick the best resorts for you to stay at.  We only choose the best of the best to ensure you have a great stay.",
  },
  {
    id: "5",
    image: require("../assets/images/services/wallet.png"),
    title: "Best Price Guarantee",
    description:
      "Nobody beats our prices.  We guarantee that you will not find a better price anywhere else. If you do, we will match it.",
  },
  {
    id: "6",
    image: require("../assets/images/services/24-hours.png"),
    title: "24/7 Support",
    description:
      "Never worry about being stranded.  We offer 24/7 support to all of our clients.  We are always here to help.",
  },
  // Add more services as needed
];

function Services() {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Services</Text>
      <FlatList
        data={servicesData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ServicesCard
            image={item.image}
            title={item.title}
            description={item.description}
          />
        )}
      />
    </View>
  );
}

export default Services;

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
