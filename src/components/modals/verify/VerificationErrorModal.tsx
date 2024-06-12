"use client";
import React, { useEffect } from "react";

interface VerificationErrorModalInterface {
  modal: boolean;
}

const VerificationErrorModal: React.FC<VerificationErrorModalInterface> = ({
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
    <main className="w-screen  flex flex-col items-center h-screen justify-start py-[60px] fixed top-0 right-0 z-[100] bg-[#02000e] px-[30px] gap-32">
      <div className="flex flex-col items-center  ">
        <h3 className="text-error mt-12 text-[36px] font-bold text-center text-red-500">
          Verificación fallida
        </h3>
      </div>
      <p className="text-center font-medium text-lg">
        &quot;Ha ocurrido un error al verificar el codigo proporcionado,
        Asegúrate de que sea correcto y vuelve a intentarlo o solicita uno
        nuevo&quot;
      </p>
    </main>
  );
};
export default VerificationErrorModal;
