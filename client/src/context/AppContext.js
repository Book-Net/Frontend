import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const storedUser = localStorage.getItem("user"); // Retrieve user from local storage
  const [user, setUser] = useState(storedUser ? storedUser : null);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", user); // Store user in local storage
    } else {
      localStorage.removeItem("user"); // Clear user from local storage
    }
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, setUser, books, setBooks }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
