"use client";
import { useEffect, useState } from "react";
import HomeTemplate from "@/templates/HomeTemplate";
import WelcomeTemplate from "@/templates/WelcomeTemplate";
import { UserData } from "../../../types";
import { AUTH_GET_USER_DATA } from "@/constant/apiKeys";
import axios from "axios";

export default function HomePage() {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [username, setUsername] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  const fetchUserData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${process.env.API_URL}${AUTH_GET_USER_DATA}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setUserData(response.data);
      setUsername(response.data.username); // Asegúrate de que `username` exista en `UserData`
      setLoading(false);
    } catch (error) {
      console.error("Error fetching user data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  if (loading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (userData === null) {
    return <WelcomeTemplate />;
  }

  return (
    <>
      <HomeTemplate userData={userData} fetchUserData={fetchUserData} />
    </>
  );
}
