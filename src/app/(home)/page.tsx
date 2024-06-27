"use client";
import React from "react";
import HomeTemplate from "@/templates/HomeTemplate";
import WelcomeTemplate from "@/templates/WelcomeTemplate";
import useUserData from "@/hooks/useUserData"; // Asegúrate de que la ruta es correcta

const HomePage: React.FC = () => {
  const { userData, loading, error } = useUserData();

  if (loading) {
    return <div>Loading...</div>; // Puedes reemplazar esto con un spinner o indicador de carga
  }

  if (error) {
    return <WelcomeTemplate />;
  }

  if (!userData) {
    return <WelcomeTemplate />;
  }

  return <HomeTemplate userData={userData} />;
};

export default HomePage;
