import React, { useState } from "react";
import Input from "../../atoms/Inputs/Input";
import Button from "../../atoms/Buttons/Button";
import LinkRedirect from "../../atoms/Navigations/LinksRedirect";
import { useAuth } from "@/hooks/authContext";
import { useRouter } from "next/navigation";
import axios from "axios";
import { AUTH_LOGIN } from "@/constant/apiKeys";

const FormLogin: React.FC = () => {
  const { setNewEmailConfirm, updateUserInfo, loginState } = useAuth();
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.API_URL}${AUTH_LOGIN}`,
        formData
      );
      if (response.status === 200) {
        const { token, username, role } = response.data;
        localStorage.setItem("token", token);
        updateUserInfo(username);
        loginState(token);
        router.push("/");
      }
    } catch (error: any) {
      if (error.response && error.response.status === 403) {
        setNewEmailConfirm(formData.email);
        router.push(`/login/verify`); // Redirigir a verificación si es necesario
      } else {
        console.error("Error al enviar la solicitud:", error);
      }
    }
  };

  return (
    <form
      className="w-[90vw] flex flex-col items-center justify-between gap-4 h-[400px]"
      onSubmit={handleSubmit}
    >
      <div className="flex mt-8 flex-col w-full gap-4">
        <Input
          type="email"
          name="email"
          placeholder="Correo Electronico"
          value={formData.email}
          onChange={handleChange}
        />
        <Input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={formData.password}
          onChange={handleChange}
        />
        <div className="w-[90vw] flex flex-row text-center text-xs justify-between">
          <LinkRedirect href="/signup" text="Crear cuenta" />
          <LinkRedirect href="/forgot-password" text="¿Olvidaste contraseña?" />
        </div>
      </div>
      <Button
        className="w-full text-xl bg-blue-800"
        type="submit"
        text="Ingresar"
      />
    </form>
  );
};

export default FormLogin;
