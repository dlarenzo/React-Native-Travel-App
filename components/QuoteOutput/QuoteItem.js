import { Pressable, View, StyleSheet, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../../constants/styles";

function QuoteItem({ id, title, description, name }) {
  // Navigation to ManageQuote.js
  const navigation = useNavigation();

  function quotePressHandler() {
    navigation.navigate("ManageQuote", {
      quoteId: id,
    });
  }

  return (
    <Pressable>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.content}>{description}</Text>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.quoteBtnContainer}>
          <Button
            title="View Details"
            onPress={quotePressHandler}
            style={styles.quoteButton}
            color={Colors.textLight}
          />
        </View>
      </View>
    </Pressable>
  );
}

export default QuoteItem;

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
    backgroundColor: Colors.bgDark,
    fontSize: 12,
    color: "#333",
    padding: 8,
    width: 200,
    alignSelf: "center",
    marginVertical: 10,
  },
});
