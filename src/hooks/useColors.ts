import axios from "axios";
import { AUTH_COLORS } from "@/constant/apiKeys";

export const fetchColors = async () => {
  const response = await axios.get(`${process.env.API_URL}${AUTH_COLORS}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response.data;
};
