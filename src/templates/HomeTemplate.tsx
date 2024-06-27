"use client";
import React from "react";
import Navbar from "@/components/molecules/Navigation/Navbar";
import { UserData } from "../../types";
import DailyRaffle from "@/components/molecules/Raffle/DailyRaffle";

interface HomeTemplateProps {
  userData: UserData;
}

const HomeTemplate: React.FC<HomeTemplateProps> = ({ userData }) => {
  return (
    <main className="w-screen h-screen flex-col-center gap-4">
      <Navbar userData={userData} />
      <div className="flex flex-col items-center h-auto">
        <h2 className="text-2xl text-white">
          Bienvenido
          <span className="text-white px-2 font-poetsen font-black italic">
            ¡{userData.username}!
          </span>
        </h2>
      </div>
      <DailyRaffle />
    </main>
  );
};

export default HomeTemplate;
