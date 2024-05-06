import React, { useState } from "react";
import axios from "axios";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import Check from "../atoms/Check";

const FormSignin = (): JSX.Element => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [policyAcepted, setPolicyAcepted] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://safari-royale-server-production.up.railway.app/api/v1/auth/register",
        formData
      );
      console.log(response.data);
      // Aquí puedes manejar la respuesta de la API como desees
    } catch (error) {
      console.error("Error al enviar la solicitud:", error);
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
          name={"name"}
          placeholder={"Usuario"}
          value={formData.name}
          onChange={handleChange}
          
        />
        <Input
          type={"text"}
          name={"username"}
          placeholder={"Nombre de Usuario"}
          value={formData.username}
          onChange={handleChange}
        />
        <Input
          type={"email"}
          name={"email"}
          placeholder={"Correo Electronico"}
          value={formData.email}
          onChange={handleChange}
          required="@"
          
        />
        <Input
          type={"password"}
          name={"password"}
          placeholder={"Contraseña"}
          value={formData.password}
          onChange={handleChange}
        />
        <div className="flex items-center">
        <Check
          required={true}
          linkText='Politicas de Privacidad'
          state={policyAcepted}
          setState={setPolicyAcepted}
        />
        </div>
      </div>
      <Button 
        className="w-full text-xl bg-blue-800"
        type={"submit"}
        text={"Registrar"}
      />
    </form>
  );
};

export default FormSignin;
