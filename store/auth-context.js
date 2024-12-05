// Use to store data in a context:
import { createContext } from "react";
import { useState } from "react";

export const AuthContext = createContext({
  token: "",
  isAuthenticated: false,
  authenticate: () => {},
  logout: () => {},
});

function AuthContextProvider({ children }) {
  // We will manage the auth related state here

  // Will manage token state as it represents the user was able to log in successfully
  const [authToken, setAuthToken] = useState();

  // Now will add authenticate function which triggers when user logs in
  function authenticate(token) {
    setAuthToken(token);
  }

  // Add logout function which triggers when user logs out
  function logout() {
    setAuthToken(null);
  }

  // Construct value object which will be pass to all context users
  const value = {
    token: authToken,
    isAuthenticated: !!authToken,
    authenticate: authenticate,
    logout: logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
