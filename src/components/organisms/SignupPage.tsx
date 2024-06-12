"use client";
import React from "react";
import TextTitle from "@/components/atoms/Text";
import LogoRoyale from "../atoms/LogoRoyale";
import FormSignup from "../molecules/FormSignup";
const SignupPage = () => {
  return (
    <article className="flex flex-col items-center w-screen h-screen py-12">
      <div className="w-[8rem] h-[8rem]  rounded-full">
        <LogoRoyale />
      </div>
      <TextTitle name={"Bienvenido"} />
      <div>
        <FormSignup />
      </div>
    </article>
  );
};
export default SignupPage;
