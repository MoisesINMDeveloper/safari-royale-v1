"use client";

import Input from "../atoms/Input";
import LogoRoyale from "../atoms/LogoRoyale";
import BackButton from "../atoms/BackButton";
import Button from "../atoms/Button";
import TextTitle from "../atoms/Text";
import { useEffect, useState } from "react";
import { CircularProgress } from "@nextui-org/react";

import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/authContext";
import { AUTH_VERIFY } from "@/constant/apiKeys";
import axios from "axios";
import VerificationErrorModal from "../modals/verify/VerificationErrorModal";
import VerificationSuccessModal from "../modals/verify/VerificationSucessModal";

const VerifyTemplate = ({ from, email }: { from: string; email?: string }) => {
  const [showResendLink, setShowResendLink] = useState(false);
  const [inputVerify, setInputVerify] = useState("");
  const [verificationError, setVerificationError] = useState(false);
  const [verificationSuccess, setVerificationSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resendButtonLoader, setResendButtonLoader] = useState(false);
  const router = useRouter();
  const {
    getNewEmailConfirm,
    updateUserInfo,
    getPasswordToConfirm,
    loginState,
  } = useAuth();

  useEffect(() => {
    if (from === "register" && getNewEmailConfirm()) {
      setShowResendLink(true);
    }
    if (from === "login" && getNewEmailConfirm()) {
      setShowResendLink(true);
    }
  }, [from, getNewEmailConfirm]);

  const handleResendCode = () => {
    setResendButtonLoader(true);
    let apiKeyToUse = AUTH_VERIFY;
    axios
      .post(`${process.env.API_URL}${apiKeyToUse}${email}`)
      .then(async (res) => {
        const data = await res.data;
        setShowResendLink(false);
        setTimeout(() => {
          setShowResendLink(true);
        }, 1000);
      })
      .catch((error) => {
        console.error("Error al reenviar el codigo:", error);
      })
      .finally(() => {
        setResendButtonLoader(false);
      });
  };

  const handleInputChange = (e: { target: { value: string } }) => {
    const input = e.target.value.slice(0, 6);
    setInputVerify(input);
    if (input.length === 6) {
      handleSubmit(input);
    }
  };

  const handleSubmit = async (input: string) => {
    setLoading(true);
    try {
      const formData = {
        email: getNewEmailConfirm(),
        verificationCode: input,
      };
      const response = await axios.post(
        `${process.env.API_URL}${AUTH_VERIFY}`,
        formData
      );
      if (response.status === 200) {
        const data = response.data;
        loginState(data?.user?.token);
        setTimeout(() => {
          router.push("/");
        }, 3500);
      }
    } catch (error) {
      setVerificationError(true);
      setTimeout(() => {
        setVerificationError(false);
      }, 3000);
      setInputVerify("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="text-white flex flex-col items-center w-screen h-screen py-16 px-6">
      <BackButton />
      <LogoRoyale />
      <TextTitle className="text-center mt-6" name={"¡Codigo Enviado!"} />
      <p className=" text-gray-100 text-center text-md py-6">
        Se ha enviado un codigo a tu correo electronico para verificar tu cuenta
        en <b>Safari Royale</b>.
      </p>
      <form
        className="w-[90vw] h-[24rem] flex flex-col items-center justify-between"
        action=""
      >
        {verificationError || verificationSuccess || loading ? (
          <CircularProgress className="text-white" size="lg" />
        ) : (
          <Input
            className="mt-6"
            type="password"
            name="verification"
            value={inputVerify}
            placeholder="Codigo de verificacion"
            onChange={handleInputChange}
          />
        )}
        {verificationError && (
          <VerificationErrorModal modal={verificationError} />
        )}
        {verificationSuccess && (
          <VerificationSuccessModal modal={verificationSuccess} />
        )}
        <div className="flex flex-col gap-4">
          {showResendLink && (
            <Button
              className="w-[90vw] text-xl"
              onClick={handleResendCode}
              type={undefined}
              text={"Verificar cuenta"}
            />
          )}
        </div>
      </form>
    </section>
  );
};

export default VerifyTemplate;
