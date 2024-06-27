// hooks/useRaffleData.ts
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { AUTH_RAFFLE } from "@/constant/apiKeys";

interface RaffleData {
  id: number;
  date: string;
  time: string;
  winnerUserId: number | null;
  winningCombinationId: number | null;
  status: string;
}

const useRaffleData = () => {
  const [raffleDataList, setRaffleDataList] = useState<RaffleData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchRaffleData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${process.env.API_URL}${AUTH_RAFFLE}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        params: {
          _limit: 5, // Obtener solo 5 elementos
          _sort: "id:desc", // Ordenar por ID en orden descendente (más recientes primero)
        },
      });
      setRaffleDataList(response.data);
    } catch (error) {
      setError("Error fetching raffle data");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchRaffleData();
  }, [fetchRaffleData]);

  return { raffleDataList, loading, error, refreshRaffleData: fetchRaffleData };
};

export default useRaffleData;
