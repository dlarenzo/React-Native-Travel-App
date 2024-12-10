import { FlatList, Text, View, StyleSheet } from "react-native";

// Function created to be placed in renderItem to output quotes
function renderQuoteItem({ item }) {
  return (
    <View style={styles.container}>
      <Text>{item.title}</Text>
      <Text>{item.description}</Text>
      <Text>{item.name}</Text>
    </View>
  );
}

function QuotesList({ quotes }) {
  // pass quotes array to the data prop
  return (
    <FlatList
      data={quotes}
      renderItem={renderQuoteItem}
      keyExtractor={(item) => item.id}
    />
  );
}

export default QuotesList;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#eaeaea",
    marginBottom: 10,
  },
});
