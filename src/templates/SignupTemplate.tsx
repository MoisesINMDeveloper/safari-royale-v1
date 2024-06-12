"use client";

import SignupPage from "@/components/organisms/SignupPage";
import BackButton from "../components/atoms/BackButton";

const SignupTemplate = () => {
  return (
    <main className="w-screen h-screen">
      <BackButton />
      <SignupPage />
    </main>
  );
};
export default SignupTemplate;
