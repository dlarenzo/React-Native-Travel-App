import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Stack } from "expo-router";

// Dimensions
const { width } = Dimensions.get("window");
const IMG_HEIGHT = 300;

// Import listingData from data folder, then pass it through the Listings component as a prop below
import listingData from "../data/destinations.json";
import { Colors } from "../constants/styles";

// Create imageMap for images
const imageMap = {
  "categories-back-1.jpg": require("../assets/images/popular/categories-back-1.jpg"),
  "categories-back-2.jpg": require("../assets/images/popular/categories-back-2.jpg"),
  "categories-back-3.jpg": require("../assets/images/popular/categories-back-3.jpg"),
};

const Listing = ({ route }) => {
  // find the specific id from the route params
  const { id } = route.params;

  // find the listing from the listingData file
  const listing = listingData.find((listing) => listing.id === id);

  if (!listing) {
    return (
      <View style={styles.container}>
        <Text>Listing not found</Text>
      </View>
    );
  }

  // Check if the image is a remote URL or a local path
  const imageSource = listing.image.startsWith("http")
    ? { uri: listing.image }
    : imageMap[listing.image];

  return (
    <>
      <View style={styles.container}>
        {/* Image */}
        <Image source={imageSource} style={styles.image} />

        {/* Information Container */}
        <View style={styles.txtContainer}>
          <Text style={styles.title}>{listing.name}</Text>

          {/* TITLE */}
          <View style={styles.locationContainer}>
            <Ionicons
              name="location"
              size={18}
              color={Colors.bgDark}
              style={styles.icon}
            />
            <Text style={styles.location}>{listing.location}</Text>
          </View>

          {/* 3 SECTION INFO */}
          <View style={styles.infoBox}>
            {/* DURATION */}
            <View style={styles.boxContainer}>
              <View style={styles.iconBox}>
                <Ionicons
                  name="location"
                  size={18}
                  color={Colors.bgDark}
                  style={styles.icon}
                />
              </View>
              <View style={styles.durationBox}>
                <Text style={styles.durationTitle}>Duration</Text>
                <Text style={styles.duration}>{listing.duration} Days</Text>
              </View>
            </View>

            {/* PERSON */}
            <View style={styles.boxContainer}>
              <View style={styles.iconBox}>
                <Ionicons
                  name="people"
                  size={18}
                  color={Colors.bgDark}
                  style={styles.icon}
                />
              </View>
              <View style={styles.durationBox}>
                <Text style={styles.durationTitle}>Person</Text>
                <Text style={styles.person}>{listing.person} </Text>
              </View>
            </View>

            {/* RATING */}
            <View style={styles.boxContainer}>
              <View style={styles.iconBox}>
                <Ionicons
                  name="star"
                  size={18}
                  color={Colors.bgDark}
                  style={styles.icon}
                />
              </View>
              <View style={styles.durationBox}>
                <Text style={styles.durationTitle}>Rating</Text>
                <Text style={styles.rating}>{listing.rating} </Text>
              </View>
            </View>
          </View>
          <Text style={styles.description}>{listing.description}</Text>
        </View>
      </View>
    </>
  );
};

export default Listing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: width,
    height: IMG_HEIGHT,
  },
  iconBox: {
    backgroundColor: Colors.bgWhite,
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
  },
  icon: {
    marginRight: 2,
  },
  txtContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 3,
  },
  infoBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  location: {
    fontSize: 18,
    color: "#666",
  },
  boxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  durationTitle: {
    fontSize: 12,
    color: "#666",
  },
  duration: {
    fontSize: 14,
    fontWeight: "bold",
  },
  person: {
    fontSize: 14,
    fontWeight: "bold",
  },
  rating: {
    fontSize: 14,
    fontWeight: "bold",
  },
  description: {
    lineHeight: 25,
    letterSpacing: 0.5,
  },
});
