import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  AUTH_RAFFLE,
  AUTH_COMBINATIONS,
  AUTH_TICKETS,
} from "@/constant/apiKeys";
import { animals, colors } from "@/constant/data"; // Asegúrate de ajustar la ruta según tu estructura de proyecto

interface Props {
  raffleId: number;
  onClose: () => void;
}

const Modal = ({ raffleId, onClose }: Props) => {
  const [winnerUserIds, setWinnerUserIds] = useState<number[]>([]);
  const [winningAnimalId, setWinningAnimalId] = useState<number | null>(null);
  const [winningColorId, setWinningColorId] = useState<number | null>(null);

  useEffect(() => {
    handleCombinationChange();
  }, [winningAnimalId, winningColorId]);

  const fetchWinningTickets = async (combinationId: number) => {
    try {
      const response = await axios.get(
        `${process.env.API_URL}${AUTH_TICKETS}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          params: {
            raffleId: raffleId,
            combinationId: combinationId,
          },
        }
      );
      setWinnerUserIds(response.data.map((ticket: any) => ticket.userId));
    } catch (error) {
      console.error("Error fetching winning tickets:", error);
    }
  };

  const handleSave = async () => {
    try {
      // Crear la combinación de animal y color
      const combinationResponse = await axios.post(
        `${process.env.API_URL}${AUTH_COMBINATIONS}`,
        {
          animalId: winningAnimalId,
          colorId: winningColorId,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      // Actualizar el sorteo con la combinación y los usuarios ganadores
      await axios.put(
        `${process.env.API_URL}${AUTH_RAFFLE}/${raffleId}`,
        {
          winnerUserIds,
          winningCombinationId: combinationResponse.data.id,
          status: "FINALIZED",
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      onClose(); // Cerrar el modal después de guardar
    } catch (error) {
      console.error("Error updating raffle:", error);
    }
  };

  const handleCombinationChange = async () => {
    if (winningAnimalId && winningColorId) {
      try {
        const response = await axios.post(
          `${process.env.API_URL}${AUTH_COMBINATIONS}`,
          {
            animalId: winningAnimalId,
            colorId: winningColorId,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        const combinationId = response.data.id;
        fetchWinningTickets(combinationId);
      } catch (error) {
        console.error("Error creating combination:", error);
      }
    }
  };

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-md shadow-md w-[400px]">
        <h2 className="text-lg font-semibold mb-4 text-gray-700">
          Editar Sorteo
        </h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Usuarios Ganadores
          </label>
          <ul>
            {winnerUserIds.map((id) => (
              <li key={id} className="flex justify-between items-center">
                <span className="text-black">{id}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Combinación Ganadora
          </label>
          <div className="flex space-x-2">
            <select
              className="block w-1/2 px-3 py-2 text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={winningAnimalId ?? ""}
              onChange={(e) => setWinningAnimalId(parseInt(e.target.value))}
            >
              <option value="">Seleccionar Animal</option>
              {animals.map((animal) => (
                <option key={animal.id} value={animal.id}>
                  {animal.name}
                </option>
              ))}
            </select>
            <select
              className="block w-1/2 px-3 py-2 text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={winningColorId ?? ""}
              onChange={(e) => setWinningColorId(parseInt(e.target.value))}
            >
              <option value="">Seleccionar Color</option>
              {colors.map((color) => (
                <option key={color.id} value={color.id}>
                  {color.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            className="mr-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
            onClick={handleSave}
          >
            Guardar
          </button>
          <button
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
            onClick={onClose}
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
