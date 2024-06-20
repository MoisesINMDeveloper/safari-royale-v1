"use client";
import React from "react";
import Navbar from "@/components/molecules/Navbar";
import { UserData } from "../../types";

interface HomeTemplateProps {
  userData: UserData;
}

const HomeTemplate: React.FC<HomeTemplateProps> = ({ userData }) => {
  return (
    <main className="w-screen h-screen">
      <Navbar userData={userData} />
      <div className="flex flex-col items-center h-auto">
        <h2 className="text-2xl text-white">
          Bienvenido
          <span className="text-white px-2 font-poetsen font-black italic">
            ¡{userData.username}!
          </span>
        </h2>
      </div>
    </main>
  );
};

export default HomeTemplate;
