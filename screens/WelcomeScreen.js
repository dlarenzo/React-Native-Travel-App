import { View, Text, Button, StyleSheet, ImageBackground } from "react-native";
import { Colors } from "../constants/styles";

function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/header-background.jpg")}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        <View style={styles.heroTitleContainer}>
          <Text style={styles.heroTitle1}>Welcome To TRAVELER</Text>
          <Text style={styles.heroTitle2}>
            {" "}
            Where we meet all your traveling needs
          </Text>
        </View>
        <View style={styles.navButton}>
          <Button
            style={styles.navButton}
            title="Login"
            onPress={() => navigation.navigate("Login")}
            color={Colors.textLight}
          />
        </View>
        <View style={styles.navButton}>
          <Button
            style={styles.navButton}
            title="Create Account"
            onPress={() => navigation.navigate("Signup")}
            color={Colors.textLight}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  heroContainer: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heroTitleContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  heroTitle1: {
    fontSize: 60,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
    color: Colors.textLight,
  },
  heroTitle2: {
    fontSize: 22,
    alignSelf: "center",
    textAlign: "center", // iOS text
    width: 250,
    color: Colors.textLight,
  },
  navButton: {
    backgroundColor: Colors.bgDark,
    width: 200,
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  imgBG: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
