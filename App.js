// Gesture handling
import "react-native-gesture-handler";

// Colors Constants
import { Colors } from "./constants/styles";

// Screens

import WelcomeScreen from "./screens/WelcomeScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";

// import WelcomeScreen from "./screens/WelcomeScreen";

// Navigation Stack Imports
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";

import { StyleSheet, Text, View } from "react-native";

// Needed to wrap the NavigationContainer for Authorized Access
import AuthContextProvider, { AuthContext } from "./store/auth-context";

import { useContext } from "react";
import AuthSite from "./screens/AuthSite";
import IconButton from "./components/ui/IconButton";
import Listing from "./components/Listing";
import ManageQuote from "./components/QuoteOutput/ManageQuote";

// Create Stake Navigator
const Stack = createNativeStackNavigator();

// Navigation Stacks for Unauthenticated Users
function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          title: "TRAVELER",
          headerStyle: {
            backgroundColor: Colors.bgDark,
          },
          headerTintColor: Colors.textLight,
        }}
      />

      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: "Login",
          headerStyle: {
            backgroundColor: Colors.bgDark,
          },
          headerTintColor: Colors.textLight,
        }}
      />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={{
          title: "Signup",
          headerStyle: {
            backgroundColor: Colors.bgDark,
          },
          headerTintColor: Colors.textLight,
        }}
      />
    </Stack.Navigator>
  );
}

// Navigation Stacks for Authenticated Users
function AuthenticatedStack() {
  const authCtx = useContext(AuthContext);
  return (
    <Stack.Navigator
      screenOptions={{
        title: "SITE PAGE YAY!",
        headerStyle: {
          backgroundColor: Colors.bgDark,
        },
        headerTintColor: Colors.textLight,
      }}
    >
      <Stack.Screen
        name="AuthSitePage"
        component={AuthSite}
        options={{
          headerRight: ({ tintColor }) => (
            <IconButton
              icon="exit"
              color={tintColor}
              size={24}
              onPress={authCtx.logout}
            />
          ),
        }}
      />
      <Stack.Screen name="Listing" component={Listing} />
      <Stack.Screen
        name="ManageQuote"
        component={ManageQuote}
        options={{ presentation: "modal" }}
      />
    </Stack.Navigator>
  );
}

// Navigation Container to hold the AuthStack
function Navigation() {
  const authCtx = useContext(AuthContext);

  return (
    <NavigationContainer>
      {/* if not authenticated, show AuthStack */}
      {!authCtx.isAuthenticated && <AuthStack />}
      {/* if authenticated, show AuthenticatedStack */}
      {authCtx.isAuthenticated && <AuthenticatedStack />}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <AuthContextProvider>
        <Navigation />
      </AuthContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
