import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import Check from "../atoms/Check";
import axios from "axios";
import { AUTH_REGISTER } from "@/constant/apiKeys";
import { useAuth } from "@/hooks/authContext";

const FormSignup = (): JSX.Element => {
  const { setNewEmailConfirm } = useAuth();
  const router = useRouter(); // Obtiene la instancia de router

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
  });
  console.log(formData);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    if (["username", "email", "password", "repeatPassword"].includes(name)) {
      setFormData({ ...formData, [name]: value });
    }
    console.log(value);
  };
  const [policyAcepted, setPolicyAcepted] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.API_URL}${AUTH_REGISTER}`,
        formData
      );
      console.log(response.data);
      if (formData.email) {
        setNewEmailConfirm(formData.email);
      }
      router.push("/signup/verify");
    } catch (error: any) {
      console.error("Error al enviar la solicitud", error);
    }
  };
  return (
    <form
      className="w-[90vw] flex flex-col items-center justify-between gap-4  h-[400px]"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col w-full gap-4">
        <Input
          type={"text"}
          name={"username"}
          value={formData.username}
          placeholder={"Usuario"}
          onChange={handleChange}
        />
        <Input
          type={"email"}
          name={"email"}
          value={formData.email}
          placeholder={"Correo Electronico"}
          onChange={handleChange}
        />

        <Input
          type={"password"}
          name={"password"}
          placeholder={"Contraseña"}
          value={formData.password}
          onChange={handleChange}
        />
        <Input
          type={"password"}
          name={"repeatPassword"}
          value={formData.repeatPassword}
          placeholder={"Confirmar Contraseña"}
          onChange={handleChange}
        />
        <div className="flex items-center">
          <Check
            state={policyAcepted}
            setState={setPolicyAcepted}
            required={true}
            linkText="Politicas de Privacidad"
          />
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

export default FormSignup;
