import { useEffect, useState } from "react";

export function usePasswordValidation(
  password: string,
  repeatPassword: string
) {
  const [passwordError, setPasswordError] = useState<string | null>(null);

  useEffect(() => {
    if (password === "" && repeatPassword === "") {
      setPasswordError(null);
    } else if (password !== repeatPassword) {
      setPasswordError("Las contraseñas no coinciden.");
    } else {
      const regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{6,})/;
      if (!regex.test(password)) {
        setPasswordError(
          "Debe contener al menos una letra mayúscula, símbolo y al menos 6 caracteres."
        );
      } else {
        setPasswordError(null);
      }
    }
  }, [password, repeatPassword]);

  return passwordError;
}
