"use client";

import LoginPage from "@/components/organisms/LoginPage";
import BackButton from "../components/atoms/BackButton";

const LoginTemplate = () => {
  return (
    <main className="w-screen h-screen">
      <BackButton />
      <LoginPage />
    </main>
  );
};
export default LoginTemplate;
