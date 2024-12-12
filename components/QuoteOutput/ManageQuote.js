import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import { Colors } from "../../constants/styles";
import { useLayoutEffect } from "react";
import IconButton from "../ui/IconButton";
import { QuotesContext } from "../../store/quotes-context";
import { useContext } from "react";
import QuoteForm from "../ManageQuote/QuoteForm";

function ManageQuote({ route, navigation }) {
  // Add useContext Hook to get the quotes array
  const quotesCtx = useContext(QuotesContext);

  // Get the quoteId from the route params
  // If there is an id, then the user is editing a quote, if not, then the user is adding a new quote
  const editedQuoteId = route.params?.quoteId;
  const isEditing = !!editedQuoteId;

  // Set Header Title based on whether the user is editing or adding a quote. Wrap it in a useLayoutEffect Hook
  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Quote" : "Add Quote",
    });
  }, [navigation, isEditing]);

  // Delete button functionality
  function deleteQuoteHandler() {
    quotesCtx.deleteQuote(editedQuoteId);
    navigation.goBack();
  }

  // Cancel button functionality
  function cancelHandler() {
    navigation.goBack();
  }

  // Confirm button functionality
  function confirmHandler() {
    if (isEditing) {
      quotesCtx.updateQuote(editedQuoteId, {
        title: "Updated Test",
        description: "Updated Test Paragraph Information Here",
        name: "Updated Test Name",
      });
    } else {
      quotesCtx.addQuote({
        title: "Test",
        description: "Test Paragraph Information Here",
        name: "Test Name",
      });
    }
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <QuoteForm />
      <View style={styles.buttonsContainer}>
        <Button mode="flat" onPress={cancelHandler} title="Cancel" />

        <Button onPress={confirmHandler} title={isEditing ? "Update" : "Add"} />
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={Colors.error}
            size={36}
            onPress={deleteQuoteHandler}
          />
        </View>
      )}
    </View>
  );
}

export default ManageQuote;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#eaeaea",
    marginVertical: 16,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 16,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    alignItems: "center",
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
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  quoteButton: {
    color: Colors.textLight,
  },
});
