"use client";

import SigninPage from "@/components/organisms/SigninPage";
import BackButton from "../components/atoms/BackButton";

const SigninTemplate = () => {
  return (
    <main className="w-screen h-screen">
      <BackButton />
      <SigninPage />
    </main>
  );
};
export default SigninTemplate;
