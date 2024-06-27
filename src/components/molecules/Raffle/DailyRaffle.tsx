import React, { useState } from "react";
import useRaffleData from "@/hooks/useRaffleData";
import RaffleBetModals from "@/components/modals/Raffle/RaffleBetModals";

const DailyRaffle = () => {
  const { raffleDataList, loading, error, refreshRaffleData } = useRaffleData();
  const [showModal, setShowModal] = useState(true);
  const [selectedRaffleId, setSelectedRaffleId] = useState<number | null>(null);

  const handleOpenModal = (raffleId: number) => {
    setSelectedRaffleId(raffleId);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedRaffleId(null);
    setShowModal(false);
  };

  const handleRefreshData = () => {
    refreshRaffleData();
  };

  if (loading) {
    return <div className="text-white">Loading...</div>;
  }

  if (error) {
    return <div className="text-white">{error}</div>;
  }

  return (
    <article className="text-white w-[80vw] bg-gray-800 p-4 rounded-md shadow-md">
      {/* <h1 className="text-xl font-bold mb-4">Sorteos pendientes</h1> */}
      {raffleDataList.length > 0 ? (
        raffleDataList.map(
          (raffleData) =>
            raffleData.status === "PENDING" && (
              <div
                key={raffleData.id}
                className="mb-4 bg-blue-600 p-4 rounded-md shadow-sm"
              >
                <h2 className=" text-lg text-center font-semibold">
                  Sorteo: {raffleData.id}
                </h2>
                <div className=" flex flex-col flex-auto ">
                  <div className="flex flex-row items-center justify-between">
                    <p className="text-sm"> {raffleData.date}</p>
                    <p className="text-sm"> {raffleData.time}</p>
                  </div>
                  <p className="text-sm ">
                    Combinación Ganadora:{" "}
                    {raffleData.winningCombinationId || " "}
                  </p>
                  <p className="text-sm ">
                    Estado: {raffleData.status || "Disponible "}
                  </p>
                  <div className="my-4 h-[15rem]">
                    <ul>
                      <li>
                        <img
                          className="w-auto h-auto "
                          src="/LeonCartoons.jpg"
                          alt="Lyon Cartoon"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
                <button
                  className="mt-2 w-[200px] px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
                  onClick={() => handleOpenModal(raffleData.id)}
                >
                  Realizar apuesta
                </button>
              </div>
            )
        )
      ) : (
        <p className="text-sm">No hay sorteos pendientes disponibles</p>
      )}

      {showModal && (
        <RaffleBetModals
          raffleId={selectedRaffleId || 0}
          onClose={handleCloseModal}
        />
      )}
    </article>
  );
};

export default DailyRaffle;
