import { View, Text, Alert } from "react-native";

// Import AuthContent where the signup takes place
import AuthContent from "../components/Auth/AuthContent";
import { createUser } from "../util/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { useContext, useState } from "react";
import { AuthContext } from "../store/auth-context";

function SignupScreen() {
  // manage signup state
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  // useContext pass the AuthContext object to the component.  Store it in a constant called authCtx
  const authCtx = useContext(AuthContext);

  // Trigger auth.js API call to signup
  async function signupHandler({ email, password }) {
    // signupHandler ran, so we are authenticating
    setIsAuthenticating(true);

    // Error handling try catch block
    try {
      // Call createUser function from auth.js
      const token = await createUser(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert(
        "Authentication Error Occurred",
        "Could not sign you up. Please check your entered credentials or try again later!"
      );
      // signupHandler completed, so we are no longer authenticating
      setIsAuthenticating(false);
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Creating user..." />;
  }

  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
