import { View, StyleSheet, Text, ImageBackground } from "react-native";
import QuoteOutput from "./QuoteOutput/QuoteOutput";
import { Colors } from "../constants/styles";
import { QuotesContext } from "../store/quotes-context";
import { useContext } from "react";

function OurClients2() {
  const quotesCtx = useContext(QuotesContext);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/header-background.jpg")}
        style={{ flex: 1 }}
      >
        <Text style={styles.sectionTitle}>Our Clients Say</Text>
        <QuoteOutput quotes={quotesCtx.quotes} />
      </ImageBackground>
    </View>
  );
}

export default OurClients2;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 18,
    color: "#333",
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
