// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import Button from "./Button";
import axios from "axios";
// import { toast } from "react-hot-toast";
// import { useNavigate } from "react-router-dom";

// import { useAuth } from "../context/AppContext";

function Test() {
  // const { setUser, user } = useAuth();
  // const navigate = useNavigate();

  const Test = async (e) => {
    e.preventDefault();

    const response = await axios.get(
      "http://localhost:9000",
      {
        headers: {
          // "x-access-token": user,
          "content-type": "multipart/form-data",
        },
      },

      { withCredentials: true }
    );
  };
}

export default Test;
