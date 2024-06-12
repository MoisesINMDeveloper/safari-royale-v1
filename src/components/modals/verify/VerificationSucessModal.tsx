"use client";
import React, { useEffect } from "react";

interface VerificationSuccessModalInterface {
  modal: boolean;
}

const VerificationSuccessModal: React.FC<VerificationSuccessModalInterface> = ({
  modal,
}) => {
  /* UseEffect para evitar scroll cuando el modal esta abierto */
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modal]);

  return (
    <main className="w-screen flex flex-col items-center h-screen justify-start py-[60px] fixed top-0 right-0 z-[100] bg-[#02000e] px-[30px] gap-32">
      <div className="flex flex-col items-center gap-4 ">
        <h3 className="text-success text-green-500 pt-12 text-[36px] font-bold text-center">
          Verificación exitosa
        </h3>
      </div>
      <p className="text-center text-md text-gray-100 font-semibold">
        &quot;Tu codigo ha sido verificado, ahora tienes acceso completo a todas
        las funciones de{" "}
        <b className="text-white font-bold text-xl  italic">¡Safari Royale!</b>{" "}
        &quot;
      </p>
    </main>
  );
};
export default VerificationSuccessModal;
