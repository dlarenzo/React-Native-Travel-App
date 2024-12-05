import { View, Text, StyleSheet } from "react-native";

import Destinations from "./Destinations";

function PopularDestination() {
  return (
    <View>
      <Text style={styles.sectionTitle}>Popular Destinations</Text>
      <Destinations />
    </View>
  );
}

export default PopularDestination;

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 34,
    fontWeight: "bold",
    marginVertical: 16,
    alignSelf: "center",
  },
});
