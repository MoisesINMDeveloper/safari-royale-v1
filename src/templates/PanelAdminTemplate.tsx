import React from "react";
import useUserData from "@/hooks/useUserData";
import Navbar from "@/components/molecules/Navigation/Navbar";
import AdminPanelPage from "../components/organisms/AdminPanelPage";

const PanelAdminTemplate = () => {
  const { userData } = useUserData();

  if (!userData) {
    return <p>No user data available</p>;
  }

  return (
    <main className="w-screen h-screen ">
      {userData.role === "ADMIN" && (
        <>
          <Navbar userData={userData} />
          <section className="flex-col-center">
            <AdminPanelPage />
          </section>
        </>
      )}
    </main>
  );
};

export default PanelAdminTemplate;
