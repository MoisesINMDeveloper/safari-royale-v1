import { AuthContext } from "../context/auth.context";
import { useContext, useState } from "react";

export function useAuth() {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error("useAuth debe ser usado dentro de un AuthProvider");
  }

  const {
    isAuthenticated,
    setIsAuthenticated,
    emailConfirm,
    setEmailConfirm,
    userInfo,
    setUserInfo,
    passwordToConfirm,
    setPasswordToConfirm,
    loginState,
    getToken,
  } = authContext;

  const isAuth = () => {
    return isAuthenticated;
  };

  const logoutState = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  const getNewEmailConfirm = () => {
    return emailConfirm;
  };

  const setNewEmailConfirm = (input: string) => {
    setEmailConfirm(input);
  };

  const getUserInfo = () => {
    return userInfo;
  };

  const updateUserInfo = (data: {
    name: string;
    username: string;
    password: string;
    email: string;
    verified: boolean;
    _id: string;
  }) => {
    setUserInfo({
      name: data.name,
      username: data.username,
      password: data.password,
      email: data.email,
      verified: data.verified,
      _id: data._id,
    });
  };

  const getPasswordToConfirm = () => {
    return passwordToConfirm;
  };

  const updatePasswordToConfirm = (input: string) => {
    setPasswordToConfirm(input);
  };

  const [codeToConfirm, setCodeToConfirm] = useState("");
  const updateCodeToConfirm = (code: string) => {
    setCodeToConfirm(code);
  };

  const getConfirmedEmail = () => {
    return emailConfirm;
  };

  return {
    isAuth,
    loginState,
    logoutState,
    setNewEmailConfirm,
    getNewEmailConfirm,
    getUserInfo,
    updateUserInfo,
    getPasswordToConfirm,
    updatePasswordToConfirm,
    codeToConfirm,
    getConfirmedEmail,
    updateCodeToConfirm,
    getToken,
  };
}
