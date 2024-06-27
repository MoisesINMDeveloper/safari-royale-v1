"use client";
import React from "react";
import TextTitle from "@/components/atoms/Items/Text";
import LogoRoyale from "../atoms/Logos/LogoRoyale";
import FormLogin from "../molecules/Forms/FormLogin";
const LoginPage = () => {
  return (
    <article className="flex flex-col items-center w-screen h-screen py-12">
      <div className="w-[8rem] h-[8rem]  rounded-full">
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
