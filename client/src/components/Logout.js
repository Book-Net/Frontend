import React from "react";
import { useAuth } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  const { setUser, user } = useAuth();

  try {
    setUser(null); // Clear user state
    localStorage.removeItem("user"); // Clear user from local storage
    navigate("/login");
  } catch (error) {
    console.log(error);
  }
};

export default Logout;
