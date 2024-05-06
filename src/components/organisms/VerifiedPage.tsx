"use client";
import React from "react";
import TextTitle from "@/components/atoms/Text";
import LogoRoyale from "../atoms/LogoRoyale";
import Verified from "../molecules/Verified";
const VerifiedPage = () => {
  return (
    <article className="flex flex-col items-center w-screen h-screen py-12">
      <div className="w-[8rem] h-[8rem] box-shadow rounded-full">
        <LogoRoyale />
      </div>
      <TextTitle name={"Bienvenido"} />
      <div>
        <Verified />
      </div>
    </article>
  );
};
export default VerifiedPage;