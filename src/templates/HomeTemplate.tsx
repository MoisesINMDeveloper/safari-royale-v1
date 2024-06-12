"use client";

import Navbar from "@/components/molecules/Navbar";
import { UserData } from "../../types";

interface HomeTemplateProps {
  userData: UserData;
  fetchUserData: () => Promise<void>;
}
const HomeTemplate: React.FC<HomeTemplateProps> = ({
  userData,
  fetchUserData,
}) => {
  return (
    <main className="w-screen h-screen">
      <Navbar />
      <div className="flex flex-col items-center h-auto">
        <h2 className=" text-2xl text-white  ">
          Bienvenido
          <span className=" text-white px-2 font-poetsen font-black italic">
            ¡{userData.username}!
          </span>
        </h2>
      </div>
    </main>
  );
};
export default HomeTemplate;
