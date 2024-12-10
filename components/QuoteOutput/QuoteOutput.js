import { View, Text, StyleSheet } from "react-native";
import QuotesList from "./QuotesList";

// Dummy Data for QuotesList
const DUMMY_QUOTES = [
  {
    id: "1",
    title: "Amazing Destinations!",
    description:
      "Our packages are tailored to your needs.  We take your thoughts and considerations into account to create the perfect vacation for you.",
    name: "Robert M. Downey Jr.",
  },
  {
    id: "2",
    title: "Extremely Professional",
    description:
      "Many people have trusted us to plan their dream vacations.  We have never failed to deliver an unforgettable experience.",
    name: "Catherine Zeta-Jones",
  },
  {
    id: "3",
    title: "Never booking anywhere else!",
    description:
      "We offer top notch service to all of our clients.  We are always available to answer any questions you may have.",
    name: "Peter Skaarsgard",
  },
  {
    id: "4",
    title: "4 Amazing Destinations!",
    description:
      "Our packages are tailored to your needs.  We take your thoughts and considerations into account to create the perfect vacation for you.",
    name: "Robert M. Downey Jr.",
  },
  {
    id: "5",
    title: "5 Extremely Professional",
    description:
      "Many people have trusted us to plan their dream vacations.  We have never failed to deliver an unforgettable experience.",
    name: "Catherine Zeta-Jones",
  },
  {
    id: "6",
    title: "6 Never booking anywhere else!",
    description:
      "We offer top notch service to all of our clients.  We are always available to answer any questions you may have.",
    name: "Peter Skaarsgard",
  },
  {
    id: "7",
    title: "7 Amazing Destinations!",
    description:
      "Our packages are tailored to your needs.  We take your thoughts and considerations into account to create the perfect vacation for you.",
    name: "Robert M. Downey Jr.",
  },
  {
    id: "8",
    title: "8 Extremely Professional",
    description:
      "Many people have trusted us to plan their dream vacations.  We have never failed to deliver an unforgettable experience.",
    name: "Catherine Zeta-Jones",
  },
  {
    id: "9",
    title: "9 Never booking anywhere else!",
    description:
      "We offer top notch service to all of our clients.  We are always available to answer any questions you may have.",
    name: "Peter Skaarsgard",
  },
];

function QuoteOutput({ quotes }) {
  return (
    <View style={styles.container}>
      {/* Quote Output, pass through Dummy_Quotes */}
      <Text style={styles.title}>Quotes</Text>
      <QuotesList quotes={DUMMY_QUOTES} />
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
