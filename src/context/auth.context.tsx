"use client";
import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";

interface UserInfoInterface {
  email: string;
  name: string;
  username: string;
  password: string;
  verified: boolean;
  _id: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
  emailConfirm: string;
  setEmailConfirm: Dispatch<SetStateAction<string>>;
  userInfo: UserInfoInterface;
  setUserInfo: Dispatch<SetStateAction<UserInfoInterface>>;
  passwordToConfirm: string;
  setPasswordToConfirm: Dispatch<SetStateAction<string>>;
  loginState: (token: string) => void;
  getToken: () => string | null;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);
export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [emailConfirm, setEmailConfirm] = useState<string>("");
  const [passwordToConfirm, setPasswordToConfirm] = useState<string>("");

  const [userInfo, setUserInfo] = useState<UserInfoInterface>({
    email: "",
    name: "",
    username: "",
    verified: false,
    password: "",
    _id: "",
  });

  const loginState = (token: string) => {
    localStorage.setItem("token", token);
    setIsAuthenticated(true);
  };

  const getToken = () => {
    return localStorage.getItem("token");
  };

  useEffect(() => {
    const token = getToken();
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
