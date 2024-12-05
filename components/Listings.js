import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "../constants/styles";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

// Create imageMap for images
const imageMap = {
  "categories-back-1.jpg": require("../assets/images/popular/categories-back-1.jpg"),
  "categories-back-2.jpg": require("../assets/images/popular/categories-back-2.jpg"),
  "categories-back-3.jpg": require("../assets/images/popular/categories-back-3.jpg"),
};

// Pass listings and category as props to Listings component
const Listings = ({ listings, category }) => {
  const navigation = useNavigation();

  // Create loading state for when listings are loading
  const [loading, setLoading] = useState(false);

  // create useState Hook for listings
  useEffect(() => {
    console.log("Update Listing");
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, [category]);

  const renderItems = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Listing", { id: item.id })}
          style={styles.itemContainer}
        >
          <View style={styles.item}>
            <Image source={imageMap[item.image]} style={styles.image} />
            <View style={styles.bookMarkHeart}>
              <Ionicons
                name="heart-outline"
                size={24}
                color={Colors.textLight}
              />
            </View>
            <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
              {item.name}
            </Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View style={{ flexDirection: "row" }}>
                <FontAwesome5
                  name="map-marker-alt"
                  size={18}
                  color={Colors.bgDark}
                />
                <Text style={styles.itemLocationTxt}>{item.location}</Text>
              </View>
              <Text style={styles.itemPriceTxt}>${item.price}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={loading ? [] : listings}
        renderItem={renderItems}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    paddingLeft: 20,
  },
  item: {
    backgroundColor: Colors.bgWhite,
    padding: 10,
    borderRadius: 10,
    marginRight: 22,
    width: 250,
  },

  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 28,
  },
  bookMarkHeart: {
    position: "absolute",
    top: 180,
    right: 30,
    backgroundColor: Colors.bgDark,
    padding: 10,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: Colors.bgWhite,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  itemLocationTxt: {
    fontSize: 13,
    marginLeft: 5,
  },
  itemPriceTxt: {
    fontSize: 14,
    fontWeight: "bold",
    color: Colors.bgDark,
  },
});

export default Listings;
