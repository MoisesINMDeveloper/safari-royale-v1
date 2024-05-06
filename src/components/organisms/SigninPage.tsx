"use client";
import React from "react";
import TextTitle from "@/components/atoms/Text";
import LogoRoyale from "../atoms/LogoRoyale";
import Form from "../molecules/FormSignin";
const SigninPage = () => {
  return (
    <article className="flex flex-col items-center w-screen h-screen py-12">
      <div className="w-[8rem] h-[8rem] box-shadow rounded-full">
        <LogoRoyale />
      </div>
      <TextTitle name={"Bienvenido"} />
      <div>
        <Form />
      </div>
    </article>
  );
};
export default SigninPage;
