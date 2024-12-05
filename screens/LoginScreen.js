// Import useState from react
import { useContext, useState } from "react";

import { View, Text, Alert } from "react-native";

import { login } from "../util/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";

// Import AuthContent where the signup takes place
import AuthContent from "../components/Auth/AuthContent";
import { AuthContext } from "../store/auth-context";

function LoginScreen() {
  // manage signup state
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authCtx = useContext(AuthContext);

  // Trigger auth.js API call to signup
  async function loginHandler({ email, password }) {
    // signupHandler ran, so we are authenticating
    setIsAuthenticating(true);

    // Error handling try catch block
    try {
      // Call createUser function from auth.js
      const token = await login(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert(
        "Authentication Error Occurred",
        "Could not log you in. Please check your entered credentials or try again later!"
      );
      // signupHandler completed, so we are no longer authenticating
      setIsAuthenticating(false);
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Logging you in..." />;
  }

  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
