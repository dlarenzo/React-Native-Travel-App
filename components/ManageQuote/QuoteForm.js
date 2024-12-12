import { View, StyleSheet, Text } from "react-native";
import Input from "./Input";
import Button from "../ui/Button";
import { Colors } from "../../constants/styles";
import { useState } from "react";

function QuoteForm({ submitButtonLabel, onCancel, onSubmit, defaultValues }) {
  const [inputValues, setInputValues] = useState({
    title: defaultValues ? defaultValues.title : "",
    description: defaultValues ? defaultValues.description : "",
    name: defaultValues ? defaultValues.name : "",
  });

  // Function Handlers
  function inputChangedHandler(inputIdentifier, enteredValue) {
    setInputValues((currInputValues) => {
      return { ...currInputValues, [inputIdentifier]: enteredValue };
    });
  }

  function submitHandler() {
    // collect the input values
    const expenseData = {
      title: inputValues.title,
      description: inputValues.description,
      name: inputValues.name,
    };
    onSubmit(expenseData);
  }

  return (
    <View>
      <Text style={styles.review}>Write A Review!</Text>
      <Input
        label="Title"
        textInputConfig={{
          placeholder: "Enter Title",
          keyboardType: "default",
          onChangeText: inputChangedHandler.bind(this, "title"),
          value: inputValues.title,
        }}
      />
      <Input
        label="Description"
        textInputConfig={{
          placeholder: "Enter your review here",
          keyboardType: "default",
          onChangeText: inputChangedHandler.bind(this, "description"),
          value: inputValues.description,
        }}
      />
      <Input
        label="Name"
        textInputConfig={{
          placeholder: "Enter  Name",
          multiline: true,
          keyboardType: "default",
          onChangeText: inputChangedHandler.bind(this, "name"),
          value: inputValues.name,
        }}
      />
      <View style={styles.buttonsContainer}>
        <Button mode="flat" onPress={onCancel}>
          Cancel
        </Button>

        <Button onPress={submitHandler}>{submitButtonLabel}</Button>
      </View>
    </View>
  );
}

export default QuoteForm;

const styles = StyleSheet.create({
  review: {
    fontSize: 25,
    fontWeight: 800,
    color: Colors.textBlue,
    marginBottom: 20,
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 16,
  },
});
