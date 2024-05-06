"use server";

import Navbar from "@/components/molecules/Navbar";

const HomeTemplate = () => {
  return (
    <main className="w-screen">
      <Navbar />
      <h1 className="text-white">Hola mundo</h1>
    </main>
  );
};
export default HomeTemplate;
