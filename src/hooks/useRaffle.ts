import axios from "axios";
import { AUTH_RAFFLE } from "@/constant/apiKeys";

export const updateRaffle = async (
  raffleId: number,
  winnerUserId: number | null,
  winningCombinationId: number
) => {
  const response = await axios.put(
    `${process.env.API_URL}${AUTH_RAFFLE}/${raffleId}`,
    {
      winnerUserId,
      winningCombinationId,
      status: "FINALIZED",
    },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  return response.data;
};
