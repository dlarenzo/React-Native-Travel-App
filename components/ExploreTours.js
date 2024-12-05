import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "../constants/styles";

const ExploreTours = () => {
  return (
    <View style={styles.toursOuterContainer}>
      <View style={styles.toursBg}>
        <View style={styles.toursContainer}>
          <Text style={styles.toursTxt}>
            Discover everything! The sky is the limit!
          </Text>
          <TouchableOpacity style={styles.toursBtn}>
            <Text style={styles.toursBtnTxt}>Explore Tours</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ExploreTours;

const styles = StyleSheet.create({
  toursOuterContainer: {
    marginVertical: 40,
  },
  toursBg: {
    backgroundColor: Colors.bgDark,
    paddingVertical: 40,
  },
  toursContainer: {
    alignItems: "center",
    fontColor: Colors.textLight,
  },
  toursTxt: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.textLight,
    marginBottom: 20,
  },
  toursBtn: {
    backgroundColor: Colors.bgLight,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 10,
    width: 180,
    borderWidth: 3,
    borderColor: Colors.bgWhite,
  },
  toursBtnTxt: {
    color: Colors.textDark,
    textTransform: "uppercase",
    textAlign: "center",
  },
});
