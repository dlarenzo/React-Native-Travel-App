import { View, Text, Button, StyleSheet, ImageBackground } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/header-background.jpg")}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        <View style={styles.heroTitleContainer}>
          <Text style={styles.heroTitle1}>Welcome To TRAVELR</Text>
          <Text style={styles.heroTitle2}>
            {" "}
            Where we meet all your traveling needs
          </Text>
        </View>
        <Button
          style={styles.navButton}
          title="Login"
          onPress={() => navigation.navigate("Login")}
        />
        <Button
          style={styles.navButton}
          title="Create Account"
          onPress={() => navigation.navigate("Signup")}
        />
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
    backgroundColor: Colors.bgDark,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  heroTitle1: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  heroTitle2: {
    fontSize: 18,
    alignSelf: "center",
    textAlign: "center", // iOS text
    width: 250,
  },
  navButton: {
    backgroundColor: Colors.bgDark,
    padding: 10,
    margin: 10,
    borderRadius: 5,
    color: Colors.textLight,
  },
  imgBG: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
