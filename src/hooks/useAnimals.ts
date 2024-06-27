import axios from "axios";
import { AUTH_ANIMALS } from "@/constant/apiKeys";

export const fetchAnimals = async () => {
  const response = await axios.get(`${process.env.API_URL}${AUTH_ANIMALS}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response.data;
};
