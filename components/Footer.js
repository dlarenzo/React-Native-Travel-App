import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "../constants/styles";
import { Ionicons } from "@expo/vector-icons";

const Footer = () => {
  return (
    <>
      <View style={styles.footerContainer}>
        <View>
          <Text style={styles.title}>Connect With Us</Text>
          <View>
            <View style={styles.iconContainer}>
              <Ionicons
                name="logo-facebook"
                size={24}
                color={Colors.textLight}
                style={{ marginRight: 5 }}
              />
              <Text style={styles.connectTxt}>Facebook</Text>
            </View>
            <View style={styles.iconContainer}>
              <Ionicons
                name="logo-twitter"
                size={24}
                color={Colors.textLight}
                style={{ marginRight: 5 }}
              />
              <Text style={styles.connectTxt}>Twitter</Text>
            </View>
            <View style={styles.iconContainer}>
              <Ionicons
                name="logo-instagram"
                size={24}
                color={Colors.textLight}
                style={{ marginRight: 5 }}
              />
              <Text style={styles.connectTxt}>Instagram</Text>
            </View>
            <View style={styles.iconContainer}>
              <Ionicons
                name="logo-linkedin"
                size={24}
                color={Colors.textLight}
                style={{ marginRight: 5 }}
              />
              <Text style={styles.connectTxt}>LinkedIn</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.copyright}>
        <Text style={styles.connectTxt}>&copy; 2025</Text>
        <Text style={styles.connectTxt}>larenzodegraff.com</Text>
      </View>
    </>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.bgDarker,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.textLight,
    marginTop: 20,
    marginBottom: 35,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 25,
    alignItems: "center",
    paddingBottom: 10,
  },
  connectTxt: {
    fontSize: 18,
    color: Colors.textLight,
    marginBottom: 2,
  },
  copyright: {
    backgroundColor: "black",
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
});
