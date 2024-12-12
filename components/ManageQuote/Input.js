import { Text, View, TextInput, StyleSheet } from "react-native";
import { Colors } from "../../constants/styles";

function Input({ label, textInputConfig }) {
  const inputStyles = [styles.input];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputMultiline);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={inputStyles} {...textInputConfig} />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    marginHorizontal: 5,
  },

  label: {
    fontSize: 16,
    fontWeight: 800,
    color: Colors.textBlue,
    marginBottom: 5,
  },
  input: {
    padding: 6,
    fontSize: 16,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
});
