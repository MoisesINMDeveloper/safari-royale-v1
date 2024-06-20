import React from "react";
import useUserData from "@/hooks/useUserData";
import Navbar from "@/components/molecules/Navbar";

const PanelAdminTemplate = () => {
  const { userData } = useUserData();

  if (!userData) {
    return <p>No user data available</p>;
  }

  return (
    <main className="w-screen h-screen">
      {userData.role === "ADMIN" && (
        <>
          <Navbar userData={userData} />
          <h1 className="text-white">Admin Panel</h1>
        </>
      )}
    </main>
  );
};

export default PanelAdminTemplate;
