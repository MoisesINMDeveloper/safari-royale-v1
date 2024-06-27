import React, { useState } from "react";
import { AUTH_RAFFLE } from "@/constant/apiKeys";
import axios from "axios";
interface RaffleModalProps {
  isOpen: boolean;
  onClose: any;
}
const RaffleModal: React.FC<RaffleModalProps> = ({ isOpen, onClose }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [status, setStatus] = useState("PENDING");

  const formatDate = (date: any) => {
    const [year, month, day] = date.split("-");
    return `${day}/${month}/${year}`;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const formattedDate = formatDate(date);
    const formattedTime = time.length === 5 ? `${time}:00` : time; // Añade segundos si faltan

    const data = {
      date: formattedDate,
      time: formattedTime,
      status,
    };

    console.log(data);
    try {
      const response = await axios.post(
        `${process.env.API_URL}${AUTH_RAFFLE}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(response.data);
      onClose(); // Cierra el modal después de enviar los datos
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  if (!isOpen) return null; // No renderiza el modal si no está abierto

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-75">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-white">
          Raffle Modal
        </h2>
        <div className="mb-4">
          <label
            htmlFor="date"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Date:
          </label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full px-3 py-2 text-gray-900 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="time"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Time:
          </label>
          <input
            type="time"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full px-3 py-2 text-gray-900 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="status"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Status:
          </label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full px-3 py-2 text-gray-900 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="PENDING">PENDING</option>
            <option value="FINALIZED">FINALIZED</option>
          </select>
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="mr-4 bg-gray-500 text-white font-bold py-2 px-4 rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-indigo-600 text-white font-bold py-2 px-4 rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default RaffleModal;
