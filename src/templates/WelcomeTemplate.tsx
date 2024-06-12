"use client";

import WelcomePage from "@/components/organisms/WelcomePage";
import BackButton from "../components/atoms/BackButton";

const LoginTemplate = () => {
  return (
    <main className="w-screen h-screen">
      <BackButton />
      <WelcomePage />
    </main>
  );
};
export default LoginTemplate;
