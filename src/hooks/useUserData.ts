"use client";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useAuth } from "./authContext";
import { AUTH_GET_USER_DATA } from "@/constant/apiKeys";

const useUserData = () => {
  const { getToken } = useAuth();
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  const fetchUserData = useCallback(async () => {
    const token = getToken();
    if (token) {
      try {
        setLoading(true);
        const response = await axios.get(
          `${process.env.API_URL}${AUTH_GET_USER_DATA}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setUserData(response.data);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  }, [getToken]);

  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  return { userData, loading, error, refreshUserData: fetchUserData };
};

export default useUserData;
