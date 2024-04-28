import React from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import Check from "../atoms/Check";

const FormSignin = (): JSX.Element => {
  // Cambia void por JSX.Element
  return (
    <form
      className="w-[90vw] flex flex-col items-center justify-between gap-4  h-[400px]"
      action=""
    >
      <div className="flex flex-col w-full gap-4">
        <Input type={"text"} name={"name"} placeholder={"Usuario"} />
        <Input
          type={"email"}
          name={"email"}
          placeholder={"Correo Electronico"}
        />
        <Input type={"text"} name={"phone"} placeholder={"Telefono"} />
        <Input type={"password"} name={"password"} placeholder={"Contraseña"} />
        <Input
          type={"password"}
          name={"password"}
          placeholder={"Confirmar Contraseña"}
        />
        <div className="flex items-center">
          <Check required={true} linkText="Politicas de Privacidad" />
        </div>
      </div>
      {/* Crear funcion submit para que redireccione al home PD: Usar useRouter de next/navigation */}
      <Button
        className="w-full text-xl bg-blue-800"
        type={""}
        text={"Ingresar"}
      />
    </form>
  );
};

export default FormSignin;
