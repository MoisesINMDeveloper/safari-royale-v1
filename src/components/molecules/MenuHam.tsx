'use client'
import { useState } from "react";
import Link from "next/link";
import { IoClose, IoMenuSharp } from "react-icons/io5";

const MenuHam = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isOpen ? (
        <IoClose className="hover:cursor-pointer" onClick={toggleMenu} />
      ) : (
        <IoMenuSharp className="hover:cursor-pointer " onClick={toggleMenu} />
      )}
      {isOpen && (
        <div className="fixed top-0 right-0 bg-black p-4 mt-[60px] z-50 w-[100vw] h-[100vh]  ">
          <ul className=" text-2xl flex flex-col justify-center items-center">
            <li>
              <Link href={"/deposit-or-withdrawal"}>Depositar</Link>
            </li>
            <li>
              <Link href={"/deposit-or-withdrawal"}>Retirar</Link>
            </li>
            <li>
              <Link href={"/history"}>Movimientos</Link>
            </li>
            <li>
              <Link href={"/results"}>Resultados</Link>
            </li>
            <li>
              <Link href={"/logout"}>Salir</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default MenuHam;
