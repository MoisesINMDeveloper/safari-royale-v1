"use client";
import React from "react";
import TextTitle from "@/components/atoms/Text";
import LogoRoyale from "../atoms/LogoRoyale";
import FormLogin from "../molecules/FormLogin";
const LoginPage = () => {
  return (
    <article className="flex flex-col items-center w-screen h-screen py-12">
      <div className="w-[8rem] h-[8rem] box-shadow rounded-full">
        <LogoRoyale />
      </div>
      <TextTitle name={"Bienvenido"} />
      <div>
        <FormLogin />
      </div>
    </article>
  );
};
export default LoginPage;
