import { View } from "react-native";
import Input from "./Input";

function QuoteForm() {
  // Function Handlers
  function titleChangedHandler() {
    console.log("Title Changed");
  }

  function descriptionChangedHandler() {
    console.log("Description Changed");
  }

  function nameChangedHandler() {
    console.log("Name Changed");
  }

  return (
    <View>
      <Input
        label="Title"
        textInputConfig={{
          placeholder: "Enter Title",
          keyboardType: "default",
          onChangeText: titleChangedHandler,
        }}
      />
      <Input
        label="Description"
        textInputConfig={{
          placeholder: "Enter your review here",
          keyboardType: "default",
          onChangeText: descriptionChangedHandler,
        }}
      />
      <Input
        label="Name"
        textInputConfig={{
          placeholder: "Enter  Name",
          multiline: true,
          keyboardType: "default",
          onChangeText: nameChangedHandler,
        }}
      />
    </View>
  );
}

export default QuoteForm;
