import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Colors } from "../constants/styles";
import ExploreTours from "../components/ExploreTours";
import Services from "../components/Services";
import CategoryButtons from "../components/CategoryButtons";
import Listings from "../components/Listings";
import Listing from "../components/Listing";
import listingData from "../data/destinations.json";
import HotTopics from "../components/HotTopics";
import OurClients from "../components/OurClients";
import OurClients2 from "../components/OurClients2";
import Footer from "../components/Footer";

function AuthSite() {
  const [category, setCategory] = useState("All");

  const onCatChanged = (category) => {
    setCategory(category);
    console.log(category);
  };

  const renderItem = ({ item }) => {
    switch (item.type) {
      case "header":
        return <Text style={styles.headerTxt}>{item.text}</Text>;
      case "search":
        return (
          <View style={styles.searchWrapper}>
            <View style={styles.searchBar}>
              <Ionicons
                name="search"
                size={18}
                color="black"
                style={{ marginRight: 10 }}
              />
              <TextInput placeholder="Search..." />
            </View>
            <TouchableOpacity onPress={() => {}} style={styles.filterBtn}>
              <Ionicons name="options" size={28} color={Colors.bgWhite} />
            </TouchableOpacity>
          </View>
        );
      case "categories":
        return <CategoryButtons onCategoryChanged={onCatChanged} />;
      case "listings":
        return <Listings category={category} listings={listingData} />;
      case "services":
        return <Services />;
      case "topics":
        return <HotTopics />;

      case "clients2":
        return <OurClients2 />;
      case "explore":
        return <ExploreTours />;
      case "footer":
        return <Footer />;
      default:
        return null;
    }
  };

  const data = [
    { type: "header", text: "Get Ready To Get Your Travel On!" },
    { type: "search" },
    { type: "categories" },
    { type: "listings" },
    { type: "topics" },
    { type: "services" },
    { type: "clients" },
    { type: "clients2" },
    { type: "explore" },
    { type: "footer" },
  ];

  return (
    <>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          style={styles.flatContainer}
        />
      </GestureHandlerRootView>
    </>
  );
}

export default AuthSite;

const styles = StyleSheet.create({
  headerTxt: {
    color: Colors.textLight,
    fontWeight: "800",
  },
  container: {
    flex: 1,
    paddingHorizontal: 18,
  },
  flatContainer: {},
  headerTxt: {
    fontSize: 28,
    fontWeight: "800",
    textAlign: "center",
    marginVertical: 20,
  },
  searchWrapper: {
    flexDirection: "row",
    marginVertical: 20,
    paddingHorizontal: 18,
  },
  searchBar: {
    flexDirection: "row",
    flex: 1,
    backgroundColor: "white",
    padding: 16,
    borderRadius: 10,
  },
  filterBtn: {
    backgroundColor: Colors.bgDark,
    marginLeft: 15,
    padding: 12,
    borderRadius: 10,
  },
});
