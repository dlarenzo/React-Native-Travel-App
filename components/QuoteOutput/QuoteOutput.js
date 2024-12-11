import { View, Text, StyleSheet } from "react-native";
import { useContext } from "react";
import QuotesList from "./QuotesList";
import { QuotesContext } from "../../store/quotes-context";

function QuoteOutput() {
  const { quotes } = useContext(QuotesContext);
  return (
    <View style={styles.container}>
      {/* Quote Output, pass through Dummy_Quotes */}
      <Text style={styles.title}>Quotes</Text>
      <QuotesList quotes={quotes} />
    </View>
  );
}

export default QuoteOutput;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
