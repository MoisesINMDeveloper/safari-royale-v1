
"use client"
import React from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import LinkRedirect from "../atoms/LinksRedirect";

const FormLogin = (): JSX.Element => {
  return (
    <form
      className="w-[90vw] flex flex-col items-center justify-between gap-4  h-[400px]"
      action=""
    >
      <div className="flex mt-8 flex-col w-full gap-4">
        <Input
          type={"email"}
          name={"email"}
          placeholder={"Correo Electronico"}
        />
        <Input type={"password"} name={"password"} placeholder={"Contraseña"} />
        <div className="w-[90vw] flex flex-row text-center text-xs justify-between">
          <LinkRedirect href="/signin" text={"Crear cuenta"} />
          <LinkRedirect
            href="/forgot-password"
            text={"¿Olvidaste contraseña?"}
          />
        </div>
      </div>
      <Button
        className="w-full text-xl bg-blue-800"
        type={""}
        text={"Ingresar"}
      />
    </form>
  );
};

export default FormLogin;