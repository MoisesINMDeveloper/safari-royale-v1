"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import HomeTemplate from "@/templates/HomeTemplate";
import { UserData } from "../../../types";
import { AUTH_GET_USER_DATA } from "@/constant/apiKeys";
import WelcomeTemplate from "@/templates/WelcomeTemplate";

const HomePage: React.FC = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [username, setUsername] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  const fetchUserData = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      if (!token) {
        setLoading(false);
        return;
      }

      const response = await axios.get(
        `${process.env.API_URL}${AUTH_GET_USER_DATA}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setUserData(response.data);
      setUsername(response?.data?.username); // Asegúrate de que `username` exista en `UserData`
      setLoading(false);
    } catch (error) {
      console.error("Error fetching user data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  if (userData === null) {
    return <WelcomeTemplate />;
  }

  return (
    <>
      <HomeTemplate userData={userData} />
    </>
  );
};

export default HomePage;
