import axios from "axios";
import { AUTH_COMBINATIONS } from "@/constant/apiKeys";

export const createCombination = async (animalId: number, colorId: number) => {
  const response = await axios.post(
    `${process.env.API_URL}${AUTH_COMBINATIONS}`,
    {
      animalId,
      colorId,
    },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  return response.data;
};
