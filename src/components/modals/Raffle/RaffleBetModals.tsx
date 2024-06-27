import React, { useState } from "react";
import { animals, colors } from "@/constant/data";

type BetModalProps = {
  raffleId: number;
  onClose: () => void;
};

const BetModal: React.FC<BetModalProps> = ({ raffleId, onClose }) => {
  const [selectedAnimal, setSelectedAnimal] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [combinations, setCombinations] = useState<string[]>([]);

  const addCombination = () => {
    if (selectedAnimal && selectedColor) {
      setCombinations([
        ...combinations,
        `${selectedAnimal} + ${selectedColor}`,
      ]);
      setSelectedAnimal("");
      setSelectedColor("");
    }
  };

  const handleBet = () => {
    // Lógica para enviar las apuestas
    console.log(`Raffle ID: ${raffleId}, Combinations: ${combinations}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-white p-6 h-[80vh] rounded-lg shadow-lg w-full max-w-sm overflow-y-auto">
        <div className="mb-4">
          <label className="block mb-2 text-black font-bold text-2xl">
            Selecciona un animal + color
          </label>
          <div className="grid grid-cols-3 gap-2">
            {animals.map((animal, index) => (
              <button
                key={index}
                className={`p-2 border rounded ${
                  selectedAnimal === animal.name
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-black"
                }`}
                onClick={() => setSelectedAnimal(animal.name)}
              >
                {animal.name}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-black">Selecciona un color:</label>
          <div className="grid grid-cols-3 gap-2">
            {colors.map((color, index) => (
              <button
                key={index}
                className={`p-2 border rounded ${
                  selectedColor === color.name
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-black"
                }`}
                onClick={() => setSelectedColor(color.name)}
              >
                {color.name}
              </button>
            ))}
          </div>
        </div>

        <button
          className="w-full p-2 bg-blue-500 text-white rounded mb-4"
          onClick={addCombination}
        >
          Agregar combinación
        </button>

        <div className="mb-4 h-32 rounded-md overflow-y-auto">
          <ul>
            {combinations.map((combination, index) => (
              <li key={index} className="p-2 border-b text-black">
                {combination}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-end">
          <button
            className="p-2 bg-red-500 text-white rounded mr-2"
            onClick={onClose}
          >
            Cancelar
          </button>
          <button
            className="p-2 bg-green-500 text-white rounded"
            onClick={handleBet}
          >
            Apostar
          </button>
        </div>
      </div>
    </div>
  );
};

export default BetModal;
