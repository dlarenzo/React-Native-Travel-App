import { FlatList, Text, View, StyleSheet, Button } from "react-native";
import QuoteItem from "./QuoteItem";
import { Colors } from "../../constants/styles";
import { useNavigation } from "@react-navigation/native";

// Function created to be placed in renderItem to output quotes
function renderQuoteItem({ item }) {
  return <QuoteItem {...item} />;
}

function QuotesList({ quotes }) {
  // Navigation to ManageQuote.js
  const navigation = useNavigation();

  function quotePressHandler() {
    navigation.navigate("ManageQuote");
  }
  // pass quotes array to the data prop
  return (
    <>
      <FlatList
        data={quotes}
        renderItem={renderQuoteItem}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.quoteBtnContainer}>
        <Button
          title="Add Quote"
          onPress={quotePressHandler}
          style={styles.quoteButton}
          color={Colors.textDarker}
        />
      </View>
    </>
  );
}

export default QuotesList;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#eaeaea",
    marginVertical: 16,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginVertical: 12,
    textAlign: "center",
  },
  content: {
    fontSize: 14,
    fontStyle: "italic",
    color: "#555",
    textAlign: "center",
    width: 350,
    marginVertical: 16,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#555",
    textAlign: "center",
    width: 350,
    marginBottom: 16,
  },
  quoteBtnContainer: {
    backgroundColor: Colors.btnLight,
    fontSize: 12,
    color: "#333",
    padding: 8,
    width: 200,
    alignSelf: "center",
    marginVertical: 10,
  },
});
