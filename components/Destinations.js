import { View, Text, StyleSheet, ImageBackground } from "react-native";

function Destinations() {
  return (
    <>
      <View style={styles.backgroundContainer}>
        <ImageBackground
          source={require("../assets/images/popular/categories-back-1.jpg")}
          style={{ flex: 1 }}
        >
          <View style={styles.sectionTitleContainer}>
            <Text style={styles.sectionTitle}> Caribbean</Text>
          </View>
        </ImageBackground>
      </View>

      <View style={styles.backgroundContainer}>
        <ImageBackground
          source={require("../assets/images/popular/categories-back-2.jpg")}
          style={{ flex: 1 }}
        >
          <View style={styles.sectionTitleContainer}>
            <Text style={styles.sectionTitle}> Cuba</Text>
          </View>
        </ImageBackground>
      </View>

      <View style={styles.backgroundContainer}>
        <ImageBackground
          source={require("../assets/images/popular/categories-back-3.jpg")}
          style={{ flex: 1 }}
        >
          <View style={styles.sectionTitleContainer}>
            <Text style={styles.sectionTitle}> Maldives</Text>
          </View>
        </ImageBackground>
      </View>
    </>
  );
}

export default Destinations;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    marginBottom: 40,
  },
  backgroundImage: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: "100%",
    padding: "100%",
  },
  sectionTitleContainer: {
    marginVertical: 126,
    marginHorizontal: 26,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    backgroundColor: "#fff",
    alignSelf: "center",
    textAlign: "center",
    textTransform: "uppercase",
    width: 300,
    paddingVertical: 16,
  },
});
