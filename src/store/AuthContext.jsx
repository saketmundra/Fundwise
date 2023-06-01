import React, { useEffect } from "react";
import { useState } from "react";

export const AuthContext = React.createContext();
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState("");

  // useEffect(() => {
  //   const tempToken = localStorage.getItem("access_token");
  //   if (tempToken) {
  //     setToken(tempToken);
  //     setIsLoggedIn(true);
  //   }
  // }, []);

  const login = () => {
    const tempToken = localStorage.getItem("access_token");
    if (tempToken) {
      setToken(tempToken);
      setIsLoggedIn(true);
    }

  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, token}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
