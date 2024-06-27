import React, { useState } from "react";
import Raffle from "../molecules/Raffle/Raffle";
import RaffleModal from "../modals/Raffle/RaffleModals";

const AdminPanelPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="p-4 flex-col-center gap-4">
      <Raffle />
      <button
        onClick={openModal}
        className="bg-indigo-600 text-white font-bold py-2 px-4 rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        Open Raffle Modal
      </button>
      <RaffleModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default AdminPanelPage;
